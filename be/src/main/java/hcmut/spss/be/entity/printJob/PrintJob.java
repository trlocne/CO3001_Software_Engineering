package hcmut.spss.be.entity.printJob;

import com.fasterxml.jackson.annotation.JsonBackReference;
import hcmut.spss.be.entity.document.Document;
import hcmut.spss.be.entity.fileConfig.FileConfig;
import hcmut.spss.be.entity.printLog.PrintLog;
import hcmut.spss.be.entity.printer.Printer;
import hcmut.spss.be.entity.user.User;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
@Table(name = "printJob")
public class PrintJob {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "job_id")
    Long jobId;

    @CreationTimestamp
    @Column(name = "job_start_time", updatable = false)
    LocalDateTime jobStartTime;

    @Column(name = "job_end_time")
    LocalDateTime jobEndTime;

    @Enumerated(EnumType.STRING)
    @Column(name = "status_print")
    StatusPrint statusPrint;

    @ManyToOne
    @JoinColumn(name = "printer_id")
    Printer printer;

    @ManyToOne
    @JoinColumn(name = "student_id", referencedColumnName = "user_id")
    @JsonBackReference
    User student;

    @ManyToOne
    @JoinColumn(name = "file_id")
    FileConfig fileConfig;

    @ManyToOne
    @JoinColumn(name = "document_id")
    Document document;

    @ManyToOne
    @JoinColumn(name = "log_id")
    @JsonBackReference
    PrintLog printLog;
}
