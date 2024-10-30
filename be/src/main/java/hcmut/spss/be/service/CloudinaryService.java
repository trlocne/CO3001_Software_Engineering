package hcmut.spss.be.service;

import hcmut.spss.be.entity.document.Document;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface CloudinaryService {
    Document uploadFile(MultipartFile file, String username) throws IOException;
}
