package hcmut.spss.be.repository;

import hcmut.spss.be.entity.document.Document;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DocumentRepository extends JpaRepository<Document, Long> {
}
