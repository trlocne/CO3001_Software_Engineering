package hcmut.spss.be.service;

import hcmut.spss.be.entity.document.Document;

import java.util.List;

public interface DocumentService {
    List<Document> getAllDocuments();
    Document getDocument(Long documentId);
}
