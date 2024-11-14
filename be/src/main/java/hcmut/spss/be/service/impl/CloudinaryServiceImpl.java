package hcmut.spss.be.service.impl;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.fasterxml.jackson.databind.exc.InvalidFormatException;
import hcmut.spss.be.entity.document.Document;
import hcmut.spss.be.entity.user.User;
import hcmut.spss.be.repository.DocumentRepository;
import hcmut.spss.be.repository.UserRepository;
import hcmut.spss.be.service.CloudinaryService;
import hcmut.spss.be.utils.AuthUtil;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.poi.xwpf.extractor.XWPFWordExtractor;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


import java.io.ByteArrayInputStream;
import java.io.IOException;

import java.util.Map;

@Service
public class CloudinaryServiceImpl implements CloudinaryService {

    @Autowired
    private DocumentRepository documentRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private Cloudinary cloudinary;

    @Autowired
    private AuthUtil authUtil;

    @Override
    public Document uploadFile(MultipartFile file) throws IOException {

        String fileType = file.getContentType();
        String resourceType;
        String format;
        // Kiểm tra nếu Content-Type của file được hỗ trợ
        if (fileType.equals("application/pdf")) {
            resourceType = "image";
            format = "pdf";
        } else if (fileType.equals("application/vnd.openxmlformats-officedocument.wordprocessingml.document")) {
            resourceType = "raw";
            format = "docx";
        }else if (fileType.startsWith("image/")) {
            resourceType = "image";
            format = fileType.substring("image/".length());
        }
        else {
            throw new IllegalArgumentException("Unsupported file type");
        }

        // Upload file lên Cloudinary
        //Map uploadResult = cloudinary.uploader().upload(file.getBytes(), ObjectUtils.emptyMap());
        Map uploadResult = cloudinary.uploader().upload(file.getBytes(),
                ObjectUtils.asMap("resource_type", resourceType, "format", format));
        //System.out.println(uploadResult);
        String fileUrl = uploadResult.get("secure_url").toString();
//        if (format.equals("docx")) {
//            fileUrl += ".docx";  // Thêm đuôi nếu thiếu
//        }
        // Tạo đối tượng Document
        Document document = Document.builder()
                .documentName(file.getOriginalFilename())
                .size(Long.parseLong(uploadResult.get("bytes").toString()))
                .type(uploadResult.get("format") != null? uploadResult.get("format").toString() : "docx")
                .shared(false)
                .url(fileUrl)
                .build();

        document.setStudent(authUtil.loggedInUser());
        document.setNumOfPage(countPages(file));
        return documentRepository.save(document);
    }

    private boolean isSupportedContentType(String contentType) {
        return contentType.equals("application/pdf") ||
                contentType.equals("application/vnd.openxmlformats-officedocument.wordprocessingml.document") || // DOCX
                contentType.startsWith("image/"); // Các loại ảnh như JPEG, PNG, v.v.
    }

    // đếm số trang file pdf
    public int countPdfPages(MultipartFile file) throws IOException {
        try (PDDocument document = PDDocument.load(new ByteArrayInputStream(file.getBytes()))) {
            return document.getNumberOfPages();
        }
    }

    public int countDocxPages(MultipartFile file) throws IOException {
        try (XWPFDocument document = new XWPFDocument(new ByteArrayInputStream(file.getBytes()));
             XWPFWordExtractor extractor = new XWPFWordExtractor(document)) {
            // Chuyển nội dung thành văn bản và đếm số trang dựa trên ký tự "\f" (form feed)
            return extractor.getText().split("\f").length;
        } catch (InvalidFormatException e) {
            throw new IOException("Invalid document format", e);
        }
    }

    public int countPages(MultipartFile file) throws IOException {
        String fileType = file.getContentType();
        if (fileType.equals("application/pdf")) {
            return countPdfPages(file);
        } else if (fileType.equals("application/vnd.openxmlformats-officedocument.wordprocessingml.document")) {
            return countDocxPages(file);
        }else if (fileType.startsWith("image/")) {
            return 1;
        }
        else {
            throw new IllegalArgumentException("Unsupported file type");
        }
    }
}