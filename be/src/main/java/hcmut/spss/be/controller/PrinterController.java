package hcmut.spss.be.controller;

import hcmut.spss.be.dtos.request.PrinterRequest;
import hcmut.spss.be.dtos.response.MessageResponse;
import hcmut.spss.be.dtos.response.PrinterResponse;
import hcmut.spss.be.service.PrinterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/printers")
public class PrinterController {

    private final PrinterService printerService;

    @Autowired
    public PrinterController(PrinterService printerService) {
        this.printerService = printerService;
    }

    @PostMapping
    public ResponseEntity<?> createPrinter(@RequestBody PrinterRequest request) {
        try {
            return ResponseEntity.ok(printerService.createPrinter(request));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new MessageResponse(e.getMessage()));
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getPrinterById(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(printerService.getPrinterById(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new MessageResponse(e.getMessage()));
        }
    }

    @GetMapping
    public ResponseEntity<List<PrinterResponse>> getAllPrinters() {
        return ResponseEntity.ok(printerService.getAllPrinters());
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updatePrinter(@PathVariable Long id, @RequestBody PrinterRequest request) {
        try {
            return ResponseEntity.ok(printerService.updatePrinter(id, request));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new MessageResponse(e.getMessage()));
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePrinter(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(printerService.deletePrinter(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new MessageResponse(e.getMessage()));
        }
    }

    @PutMapping("/{id}/toggle-status")
    public ResponseEntity<?> togglePrinterStatus(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(printerService.togglePrinterStatus(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new MessageResponse(e.getMessage()));
        }
    }
}
