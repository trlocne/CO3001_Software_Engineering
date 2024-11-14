package hcmut.spss.be.service.impl;

import hcmut.spss.be.entity.document.Document;
import hcmut.spss.be.repository.DocumentRepository;
import hcmut.spss.be.service.DocumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.print.Doc;
import java.util.List;

@Service
public class DocumentServiceImpl implements DocumentService {
    @Autowired
    private DocumentRepository documentRepository;

    @Override
    public List<Document> getAllDocuments() {
        return documentRepository.findAll();
    }

    @Override
    public Document getDocument(Long documentId) {
        return documentRepository.findById(documentId).orElseThrow(() -> new RuntimeException("Document not found"));
    }
}
