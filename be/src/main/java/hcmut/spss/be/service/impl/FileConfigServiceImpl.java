package hcmut.spss.be.service.impl;

import hcmut.spss.be.entity.fileConfig.FileConfig;
import hcmut.spss.be.repository.FileConfigRepository;
import hcmut.spss.be.service.FileConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FileConfigServiceImpl implements FileConfigService {

    private final FileConfigRepository fileConfigRepository;

    @Autowired
    public FileConfigServiceImpl(FileConfigRepository fileConfigRepository) {
        this.fileConfigRepository = fileConfigRepository;
    }

    @Override
    public FileConfig createFileConfig(FileConfig fileConfig) {
        return fileConfigRepository.save(fileConfig);
    }

    @Override
    public Optional<FileConfig> getFileConfigById(Long id) {
        return fileConfigRepository.findById(id);
    }

    @Override
    public List<FileConfig> getAllFileConfigs() {
        return fileConfigRepository.findAll();
    }

    @Override
    public FileConfig updateFileConfig(Long id, FileConfig updatedFileConfig) {
        return fileConfigRepository.findById(id).map(fileConfig -> {
            fileConfig.setPapersize(updatedFileConfig.getPapersize());
            fileConfig.setPaperRange(updatedFileConfig.getPaperRange());
            fileConfig.setSides(updatedFileConfig.getSides());
            fileConfig.setNumberOfCopies(updatedFileConfig.getNumberOfCopies());
            fileConfig.setLayout(updatedFileConfig.getLayout());
            fileConfig.setColor(updatedFileConfig.getColor());
            fileConfig.setDocument(updatedFileConfig.getDocument());
            return fileConfigRepository.save(fileConfig);
        }).orElseThrow(() -> new RuntimeException("FileConfig not found with id " + id));
    }

    @Override
    public void deleteFileConfig(Long id) {
        fileConfigRepository.deleteById(id);
    }
}
