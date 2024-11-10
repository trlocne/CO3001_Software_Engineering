package hcmut.spss.be.entity.notification;


import com.fasterxml.jackson.annotation.JsonBackReference;
import hcmut.spss.be.entity.user.User;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Set;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
@Table(name = "notification")
public class Notification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "notification_id")
    Long notificationId;

    @Column(name = "message")
    String message;

    @Enumerated(EnumType.STRING)
    @Column(name = "typeNoti")
    TypeNoti typeNoti;

    @ManyToOne
    @JoinColumn(name = "spso_id", referencedColumnName = "user_id")
    @JsonBackReference
    User spso;

    @ManyToMany
    @JoinTable(
            name = "student_notification",
            joinColumns = @JoinColumn(name = "notification_id"),
            inverseJoinColumns = @JoinColumn(name = "student_id", referencedColumnName = "user_id")
    )
    private Set<User> student;
}

