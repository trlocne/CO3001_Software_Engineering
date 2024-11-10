package hcmut.spss.be.entity.report;

import com.fasterxml.jackson.annotation.JsonBackReference;
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
@Table(name = "report")
public class Report {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "report_id")
    Long reportId;

    @CreationTimestamp
    @Column(name = "generated_date", updatable = false)
    LocalDateTime generatedDate;

    @Column(name = "content")
    String content;

    @Enumerated(EnumType.STRING)
    @Column(name = "report_type")
    ReportType reportType;

    @ManyToOne
    @JoinColumn(name = "spso_id", referencedColumnName = "user_id")
    @JsonBackReference
    User spso;
}
