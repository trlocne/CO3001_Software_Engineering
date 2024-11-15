package hcmut.spss.be.entity.codePrint;

import hcmut.spss.be.entity.document.Document;
import hcmut.spss.be.entity.printJob.PrintJob;
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
@Table(name = "codePrint")
public class CodePrint {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "code_id")
    Long codeId;

    @Column(name = "generated_code")
    String generatedCode;

    @CreationTimestamp
    @Column(name = "code_start_date", updatable = false)
    LocalDateTime codeStartDate;

    @Column(name = "code_end_date")
    LocalDateTime codeEndDate;

    @OneToOne
    @JoinColumn(name = "job_id")
    PrintJob printjob;

    @ManyToOne
    @JoinColumn(name = "student_id", referencedColumnName = "user_id")
    User student;
}
