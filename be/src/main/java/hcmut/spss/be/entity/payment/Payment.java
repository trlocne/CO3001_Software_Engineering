package hcmut.spss.be.entity.payment;

import hcmut.spss.be.entity.discount.Discount;
import hcmut.spss.be.entity.user.User;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.Set;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
@Table(name = "payment")
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "payment_id")
    Long paymentId;

    @Column(name = "amount_paid")
    double amountPaid;

    @Enumerated(EnumType.STRING)
    @Column(name = "payment_method")
    PaymentMethod paymentMethod;

    @Column(name = "num_pages_bought")
    int numberOfPagesBought;

    @CreationTimestamp
    @Column(name = "payment_date", updatable = false)
    LocalDateTime paymentDate;

    @ManyToOne
    @JoinColumn(name = "discount_id")
    Discount discount;

    @ManyToOne
    @JoinColumn(name = "student_id", referencedColumnName = "user_id")
    User student;
}
