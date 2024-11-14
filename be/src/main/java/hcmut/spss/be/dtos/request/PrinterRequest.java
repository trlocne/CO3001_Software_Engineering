package hcmut.spss.be.dtos.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PrinterRequest {
    private String brand;
    private String model;
    private String status;
    private String description;
    private String location;
}
