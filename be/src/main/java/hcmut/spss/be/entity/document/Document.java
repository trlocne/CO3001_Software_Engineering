package hcmut.spss.be.entity.document;

import com.fasterxml.jackson.annotation.JsonBackReference;
import hcmut.spss.be.entity.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "documents")
public class Document {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "document_id")
    private Long documentId;

    @Column(name = "document_name")
    private String documentName;

    @Column(name = "size")
    private Long size;

    @Column(name = "type")
    private String type;

    @Column(name = "num_of_page")
    private int numOfPage;

    @Column(name = "shared")
    private boolean shared;

    @Column(name = "url")
    private String url;

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "upload_time", updatable = false)
    private Date uploadTime;

    @Column(name = "category")
    private String category;

    @ManyToOne
    @JoinColumn(name = "student_id", referencedColumnName = "user_id")
    @JsonBackReference
    private User student;
}
