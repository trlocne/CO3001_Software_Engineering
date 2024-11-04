package hcmut.spss.be.controller;

import hcmut.spss.be.request.ApiResponse;
import hcmut.spss.be.request.FileConfigRequest;
import hcmut.spss.be.response.FileConfigResponse;
import hcmut.spss.be.service.FileConfigService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/fileconfig")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@Slf4j
public class FileConfigController {

    FileConfigService service;

    @PostMapping("/new")
    public ApiResponse<FileConfigResponse> createFileConfig(@RequestBody FileConfigRequest request) {
        return ApiResponse.<FileConfigResponse>builder()
                .result(FileConfigService.createFileConfig(request))
                .build();
    }

    @GetMapping("/{id}")
    public FileConfigResponse getFileConfig(@PathVariable Long id) {
        return service.getFileConfig(id);
    }

    @PutMapping("/{id}")
    public FileConfigResponse updateFileConfig(@PathVariable Long id, @RequestBody FileConfigRequest request) {
        return service.updateFileConfig(id, request);
    }

}
