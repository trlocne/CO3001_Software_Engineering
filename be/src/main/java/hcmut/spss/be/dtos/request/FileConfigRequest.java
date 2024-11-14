package hcmut.spss.be.dtos.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FileConfigRequest {
    private String paperSize;
    private String paperRange; // pham vi in
    private String sides;
    private int numberOfCopies;
    private String layout;
    private boolean color;
}
