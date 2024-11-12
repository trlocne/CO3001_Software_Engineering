package hcmut.spss.be.service;

import hcmut.spss.be.entity.fileConfig.FileConfig;
import hcmut.spss.be.request.FileConfigRequest;
import hcmut.spss.be.response.FileConfigResponse;
import hcmut.spss.be.response.MessageResponse;

import java.util.List;
import java.util.Optional;

public interface FileConfigService {
    MessageResponse createFileConfig(FileConfigRequest request, Long id);
    FileConfigResponse getFileConfigById(Long id);
    List<FileConfigResponse> getAllFileConfigsOfCurrentUser();
    MessageResponse updateFileConfig(Long id, FileConfigRequest request);
    MessageResponse deleteFileConfig(Long id);

}
