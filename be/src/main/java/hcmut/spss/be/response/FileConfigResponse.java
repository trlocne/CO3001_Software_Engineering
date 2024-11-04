package hcmut.spss.be.response;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class FileConfigResponse {
    Long fileID;
    String paperSize;
    String pageRange;
    int numberOfCopies;
    String layout;
    boolean color;
    String sides;
}
