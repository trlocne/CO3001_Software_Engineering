package hcmut.spss.be.entity.printer;


import com.fasterxml.jackson.annotation.JsonManagedReference;
import hcmut.spss.be.entity.printJob.PrintJob;
import hcmut.spss.be.entity.user.User;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;
import java.util.Set;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
@Table(name = "printer")
public class Printer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "printer_id")
    Long printerId;

    @Column(name = "brand")
    String brand;

    @Column(name = "model")
    String model;

    @Enumerated(EnumType.STRING)
    @Column(name = "status_printer")
    Status statusPrinter;

    @Column(name = "description")
    String description;

    @Column(name = "location")
    String location;

    @OneToMany(mappedBy = "printer")
    @JsonManagedReference
    List<PrintJob> printJob;
}
