package hcmut.spss.be.service.impl;

import hcmut.spss.be.dtos.request.PrinterRequest;
import hcmut.spss.be.dtos.response.MessageResponse;
import hcmut.spss.be.dtos.response.PrinterResponse;
import hcmut.spss.be.entity.printer.Printer;
import hcmut.spss.be.entity.printer.Status;
import hcmut.spss.be.repository.PrinterRepository;
import hcmut.spss.be.service.PrinterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PrinterServiceImpl implements PrinterService {

    private final PrinterRepository printerRepository;

    @Autowired
    public PrinterServiceImpl(PrinterRepository printerRepository) {
        this.printerRepository = printerRepository;
    }

    @Override
    public MessageResponse createPrinter(PrinterRequest request) {
        Printer printer = Printer.builder()
                .brand(request.getBrand())
                .model(request.getModel())
                .statusPrinter(Status.valueOf(request.getStatus()))
                .description(request.getDescription())
                .location(request.getLocation())
                .build();
        printerRepository.save(printer);
        return new MessageResponse("Printer created successfully");
    }

    @Override
    public PrinterResponse getPrinterById(Long id) {
        Printer printer = printerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Printer not found"));
        return PrinterResponse.toPrinterResponse(printer);
    }

    @Override
    public List<PrinterResponse> getAllPrinters() {
        List<Printer> printers = printerRepository.findAll();
        return printers.stream().map(PrinterResponse::toPrinterResponse).toList();
    }

    @Override
    public MessageResponse updatePrinter(Long id, PrinterRequest request) {
        Printer printer = printerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Printer not found"));
        printer.setBrand(request.getBrand());
        printer.setModel(request.getModel());
        printer.setStatusPrinter(Status.valueOf(request.getStatus()));
        printer.setDescription(request.getDescription());
        printer.setLocation(request.getLocation());
        printerRepository.save(printer);
        return new MessageResponse("Printer updated successfully");
    }

    @Override
    public MessageResponse deletePrinter(Long id) {
        Printer printer = printerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Printer not found"));
        printerRepository.deleteById(id);
        return new MessageResponse("Printer deleted successfully");
    }

    @Override
    public MessageResponse togglePrinterStatus(Long id) {
        Printer printer = printerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Printer not found"));
        printer.setStatusPrinter(printer.getStatusPrinter() == Status.ENABLE ? Status.DISABLE : Status.ENABLE);
        printerRepository.save(printer);
        return new MessageResponse("Printer status toggled successfully");
    }
}
