package hcmut.spss.be.repository;

import hcmut.spss.be.entity.fileConfig.FileConfig;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

@Repository
public interface FileConfigRepository extends JpaRepository<FileConfig, Long> {
    @Query(value = "select fc.id, fc.papersize, fc.paper_range, fc.sides, fc.number_of_copies, fc.layout, fc.color, fc.document_id from file_config fc " +
            "inner join documents d on fc.document_id = d.document_id " +
            "where d.student_id = :id", nativeQuery = true)
    List<FileConfig> findAllByStudentId(@Param("id") Long id);
}
