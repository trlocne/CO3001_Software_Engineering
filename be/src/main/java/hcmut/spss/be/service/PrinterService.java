package hcmut.spss.be.service;

import hcmut.spss.be.dtos.request.PrinterRequest;
import hcmut.spss.be.dtos.response.MessageResponse;
import hcmut.spss.be.dtos.response.PrinterResponse;

import java.util.List;

public interface PrinterService {
    MessageResponse createPrinter(PrinterRequest request);
    PrinterResponse getPrinterById(Long id);
    List<PrinterResponse> getAllPrinters();
    MessageResponse updatePrinter(Long id, PrinterRequest request);
    MessageResponse deletePrinter(Long id);
    MessageResponse togglePrinterStatus(Long id);
}
