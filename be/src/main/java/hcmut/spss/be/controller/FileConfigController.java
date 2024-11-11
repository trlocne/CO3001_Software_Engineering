package hcmut.spss.be.controller;

import hcmut.spss.be.entity.fileConfig.FileConfig;
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
    public ResponseEntity<FileConfig> createFileConfig(@RequestBody FileConfig fileConfig) {
        return ResponseEntity.ok(fileConfigService.createFileConfig(fileConfig));
    }

    @GetMapping("/{id}")
    public ResponseEntity<FileConfig> getFileConfigById(@PathVariable Long id) {
        return fileConfigService.getFileConfigById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<List<FileConfig>> getAllFileConfigs() {
        return ResponseEntity.ok(fileConfigService.getAllFileConfigs());
    }

    @PutMapping("/{id}")
    public ResponseEntity<FileConfig> updateFileConfig(@PathVariable Long id, @RequestBody FileConfig fileConfig) {
        return ResponseEntity.ok(fileConfigService.updateFileConfig(id, fileConfig));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFileConfig(@PathVariable Long id) {
        fileConfigService.deleteFileConfig(id);
        return ResponseEntity.noContent().build();
    }
}
