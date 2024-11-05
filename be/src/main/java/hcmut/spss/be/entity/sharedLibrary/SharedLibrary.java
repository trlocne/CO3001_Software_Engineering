package hcmut.spss.be.entity.sharedLibrary;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import hcmut.spss.be.entity.document.Document;
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
@Table(name = "library")
public class SharedLibrary {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "library_id")
    Long libraryId;

    @CreationTimestamp
    @Column(name = "shared_date", updatable = false)
    LocalDateTime sharedDate;

    @Column(name = "is_shared")
    boolean isShared = false;

    @Column(name = "doc_name")
    String docName;

    @OneToOne
    @JoinColumn(name = "studen_id", referencedColumnName = "user_id")
    User student;

    @OneToMany(mappedBy = "sharedLibrary")
    @JsonManagedReference
    List<Document> documents;
}
