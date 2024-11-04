package hcmut.spss.be.request;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class FileConfigRequest {
    String paperSize;
    String pageRange;
    int numberOfCopies;
    String layout;
    boolean color;
    String sides;
}
