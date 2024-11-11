package hcmut.spss.be.service;

import hcmut.spss.be.entity.fileConfig.FileConfig;

import java.util.List;
import java.util.Optional;

public interface FileConfigService {
    FileConfig createFileConfig(FileConfig fileConfig);
    Optional<FileConfig> getFileConfigById(Long id);
    List<FileConfig> getAllFileConfigs();
    FileConfig updateFileConfig(Long id, FileConfig updatedFileConfig);
    void deleteFileConfig(Long id);
}
