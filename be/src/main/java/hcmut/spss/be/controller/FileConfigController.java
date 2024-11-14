package hcmut.spss.be.controller;

import hcmut.spss.be.dtos.request.FileConfigRequest;
import hcmut.spss.be.dtos.response.FileConfigResponse;
import hcmut.spss.be.dtos.response.MessageResponse;
import hcmut.spss.be.service.FileConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/file-configs")
public class FileConfigController {

    private final FileConfigService fileConfigService;

    @Autowired
    public FileConfigController(FileConfigService fileConfigService) {
        this.fileConfigService = fileConfigService;
    }

    @PostMapping("/post")
    public ResponseEntity<?> createFileConfig(@RequestParam Long fileId, @RequestBody FileConfigRequest request) {
        try {
            return ResponseEntity.ok(fileConfigService.createFileConfig(request, fileId));
        }catch (Exception e) {
            return ResponseEntity.badRequest().body(new MessageResponse(e.getMessage()));
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getFileConfigById(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(fileConfigService.getFileConfigById(id));
        }catch (Exception e) {
            return ResponseEntity.badRequest().body(new MessageResponse(e.getMessage()));
        }
    }

    @GetMapping("")
    public ResponseEntity<List<FileConfigResponse>> getAllFileConfigsOfCurrentUser() {
        return ResponseEntity.ok(fileConfigService.getAllFileConfigsOfCurrentUser());
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateFileConfig(@PathVariable Long id, @RequestBody FileConfigRequest request) {
        try {
            return ResponseEntity.ok(fileConfigService.updateFileConfig(id, request));
        }catch (Exception e) {
            return ResponseEntity.badRequest().body(new MessageResponse(e.getMessage()));
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteFileConfig(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(fileConfigService.deleteFileConfig(id));
        }catch (Exception e) {
            return ResponseEntity.badRequest().body(new MessageResponse(e.getMessage()));
        }
    }
}
