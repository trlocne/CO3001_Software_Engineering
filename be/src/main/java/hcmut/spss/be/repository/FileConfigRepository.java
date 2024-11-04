package hcmut.spss.be.repository;

import hcmut.spss.be.entity.fileConfig.FileConfig;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface FileConfigRepository extends JpaRepository<FileConfig, Long> {
}
