package hcmut.spss.be.service.impl;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import hcmut.spss.be.entity.document.Document;
import hcmut.spss.be.entity.user.User;
import hcmut.spss.be.repository.DocumentRepository;
import hcmut.spss.be.repository.UserRepository;
import hcmut.spss.be.service.CloudinaryService;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.Map;
import java.util.Optional;

@Service
public class CloudinaryServiceImpl implements CloudinaryService {

    @Autowired
    private DocumentRepository documentRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private Cloudinary cloudinary;

    @Override
    public Document uploadFile(MultipartFile file, String username) throws IOException {
        // Upload file lên Cloudinary
        Map uploadResult = cloudinary.uploader().upload(file.getBytes(), ObjectUtils.emptyMap());

        // Tạo đối tượng Document
        Document document = Document.builder()
                .documentName(file.getOriginalFilename())
                .size(Long.parseLong(uploadResult.get("bytes").toString()))
                .type(uploadResult.get("format").toString())
                .shared(false)
                .url(uploadResult.get("secure_url").toString())
                .build();

        User student = userRepository.findByUsername(username).orElseThrow(()->new RuntimeException("user not found"));

        document.setStudent(student);
        document.setNumOfPage(countPages(file));
        return documentRepository.save(document);
    }

    // đếm số trang file pdf
    public int countPdfPages(MultipartFile file) throws IOException {
        try (PDDocument document = PDDocument.load(new ByteArrayInputStream(file.getBytes()))) {
            return document.getNumberOfPages();
        }
    }

    public int countPages(MultipartFile file) throws IOException {
        String fileType = file.getContentType();
        if (fileType.equals("application/pdf")) {
            return countPdfPages(file);
        }  else {
            throw new IllegalArgumentException("Unsupported file type");
        }
    }
}