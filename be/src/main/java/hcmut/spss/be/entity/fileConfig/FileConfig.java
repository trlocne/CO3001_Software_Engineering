package hcmut.spss.be.entity.fileConfig;

import com.fasterxml.jackson.annotation.JsonBackReference;
import hcmut.spss.be.entity.document.Document;
import hcmut.spss.be.entity.printer.Printer;
import hcmut.spss.be.entity.user.User;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
@Table(name = "fileConfig")
public class FileConfig {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    Long id;

    @Enumerated(EnumType.STRING)
    @Column(name = "paper_size")
    PaperSize paperSize;

    @Column(name = "paper_range")
    String paperRange;

    @Enumerated(EnumType.STRING)
    @Column(name = "sides")
    Sides sides;

    @Column(name = "number_of_copies")
    int numberOfCopies;

    @Enumerated(EnumType.STRING)
    @Column(name = "layout")
    Layout layout;

    @Column(name = "color")
    Boolean color;

    @OneToOne
    @JoinColumn(name = "document_id")
    @JsonBackReference
    Document document;

    @ManyToOne
    @JoinColumn(name = "student_id", referencedColumnName = "user_id")
    User student;
}