package hcmut.spss.be.entity.printLog;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import hcmut.spss.be.entity.printJob.PrintJob;
import hcmut.spss.be.entity.user.User;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
@Table(name = "printLog")
public class PrintLog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "log_id")
    Long printLogId;

    @CreationTimestamp
    @Column(name = "start_time", updatable = false)
    LocalDateTime startTime;

    @Column(name = "end_time")
    LocalDateTime endTime;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    Status status;

    @Column(name = "paper_size")
    String paperSize;

    @Column(name = "doc_name")
    String docName;

    @Column(name = "page_printed")
    int pagePrinted;

    @OneToOne
    @JoinColumn(name = "student_id", referencedColumnName = "user_id")
    User student;

    @OneToMany(mappedBy = "printLog")
    @JsonManagedReference
    @ToString.Exclude
    List<PrintJob> printJobList;
}
