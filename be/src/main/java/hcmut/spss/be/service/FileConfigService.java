package hcmut.spss.be.service;

import hcmut.spss.be.entity.fileConfig.FileConfig;
import hcmut.spss.be.mapper.FileConfigMapper;
import hcmut.spss.be.repository.FileConfigRepository;
import hcmut.spss.be.request.FileConfigRequest;
import hcmut.spss.be.response.FileConfigResponse;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class FileConfigService {

    static FileConfigRepository repository;
    static FileConfigMapper mapper;

    public static FileConfigResponse createFileConfig(FileConfigRequest request) {
        FileConfig fileConfig = mapper.toFileConfig(request);
        try{
            fileConfig = repository.save(fileConfig);
        } catch (DataIntegrityViolationException e){
            throw new DataIntegrityViolationException(e.getMessage());
        }
        return mapper.toFileConfigResponse(fileConfig);
    }

    public FileConfigResponse getFileConfig(Long id) {
        FileConfig fileConfig = repository.findById(id).orElseThrow(() -> new RuntimeException("File Properties not found"));
        return mapper.toFileConfigResponse(fileConfig);
    }

    public FileConfigResponse updateFileConfig(Long id, FileConfigRequest request) {
        FileConfig existingProperties = repository.findById(id).orElseThrow(() -> new RuntimeException("File Properties not found"));
        mapper.updateFileConfig(request, existingProperties);
        return mapper.toFileConfigResponse(repository.save(existingProperties));
    }
}
