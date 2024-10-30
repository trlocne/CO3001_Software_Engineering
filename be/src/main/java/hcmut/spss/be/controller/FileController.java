package hcmut.spss.be.controller;

import hcmut.spss.be.entity.document.Document;
import hcmut.spss.be.service.CloudinaryService;
import hcmut.spss.be.service.DocumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.print.Doc;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/files")
public class FileController {

    @Autowired
    private CloudinaryService cloudinaryService;

    @Autowired
    private DocumentService documentService;

    @PostMapping("/upload")
    public ResponseEntity<?> uploadFile(@RequestBody MultipartFile file, @AuthenticationPrincipal UserDetails userDetails) {
        try {
            String username = userDetails.getUsername();
            // Upload file và lưu thông tin vào DB
            Document uploadedFile = cloudinaryService.uploadFile(file, username);

            // Trả về thông tin file đã lưu trong DB
            return ResponseEntity.ok(uploadedFile);
        } catch (IOException e) {
            return ResponseEntity.status(500).body("Error uploading file: " + e.getMessage());
        }
    }

    @GetMapping
    public ResponseEntity<List<Document>> getAllFiles() {
        List<Document> files = documentService.getAllDocuments();
        return ResponseEntity.ok(files);
    }

    // API để lấy file theo ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getFileById(@PathVariable Long id) {
        try {
            Document document = documentService.getDocument(id);
            return ResponseEntity.ok(document);
        }catch (Exception e){
            return ResponseEntity.status(500).body("Error retrieving file: " + e.getMessage());
        }
    }
}
