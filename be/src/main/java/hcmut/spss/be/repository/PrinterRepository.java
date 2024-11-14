package hcmut.spss.be.repository;

import hcmut.spss.be.entity.printer.Printer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PrinterRepository extends JpaRepository<Printer, Long> {
}
