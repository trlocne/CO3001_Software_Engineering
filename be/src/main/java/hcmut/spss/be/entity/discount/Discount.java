package hcmut.spss.be.entity.discount;

import com.fasterxml.jackson.annotation.JsonBackReference;
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
@Table(name = "discount")
public class Discount {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "discount_id")
    Long discountId;

    @Column(name = "discount_code")
    String discountCode;

    @Column(name = "discount_value")
    double discountValue;

    @Column(name = "usage_limit")
    int usageLimit;

    @Column(name = "is_All")
    Boolean isAll;

    @ManyToOne
    @JoinColumn(name = "spso_id",referencedColumnName = "user_id")
    @JsonBackReference
    User spso;
}
