package hcmut.spss.be.service.impl;

import hcmut.spss.be.entity.document.Document;
import hcmut.spss.be.entity.fileConfig.FileConfig;
import hcmut.spss.be.entity.fileConfig.Layout;
import hcmut.spss.be.entity.fileConfig.PaperSize;
import hcmut.spss.be.entity.fileConfig.Sides;
import hcmut.spss.be.entity.user.User;
import hcmut.spss.be.repository.DocumentRepository;
import hcmut.spss.be.repository.FileConfigRepository;
import hcmut.spss.be.request.FileConfigRequest;
import hcmut.spss.be.response.FileConfigResponse;
import hcmut.spss.be.response.MessageResponse;
import hcmut.spss.be.service.FileConfigService;
import hcmut.spss.be.utils.AuthUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FileConfigServiceImpl implements FileConfigService {

    private final FileConfigRepository fileConfigRepository;

    @Autowired
    private DocumentRepository documentRepository;

    @Autowired
    private AuthUtil authUtil;

    @Autowired
    public FileConfigServiceImpl(FileConfigRepository fileConfigRepository) {
        this.fileConfigRepository = fileConfigRepository;
    }

    @Override
    public MessageResponse createFileConfig(FileConfigRequest request, Long id) {
        // find document to config
        Document document = documentRepository.findById(id).orElseThrow(() -> new RuntimeException("Document not found"));
        if(document.getFileConfig()!=null){
            throw new RuntimeException("Document already exists");
        }

        // create instance file config from request
        FileConfig fileConfig = FileConfig.builder()
                        .papersize(PaperSize.valueOf(request.getPaperSize()))
                                .paperRange(request.getPaperRange())
                                        .sides(Sides.valueOf(request.getSides()))
                                                .numberOfCopies(request.getNumberOfCopies())
                                                        .layout(Layout.valueOf(request.getLayout()))
                                                                .color(request.isColor())
                                                                        .document(document).build();
        fileConfigRepository.save(fileConfig);
        return new MessageResponse("FileConfiguration created successfully");
    }

    @Override
    public FileConfigResponse getFileConfigById(Long id) {
        FileConfig fileConfig = fileConfigRepository.findById(id).orElseThrow(() -> new RuntimeException("Document not found"));
        return FileConfigResponse.toFileConfigResponse(fileConfig);
    }

    @Override
    public List<FileConfigResponse> getAllFileConfigsOfCurrentUser() {
        Long currentUserId = authUtil.loggedInUserId();
        List<FileConfig> fileConfigs = fileConfigRepository.findAllByStudentId(currentUserId);
        return fileConfigs.stream().map(FileConfigResponse::toFileConfigResponse).toList();
    }

    @Override
    public MessageResponse updateFileConfig(Long id, FileConfigRequest request) {
        FileConfig fileConfig = fileConfigRepository.findById(id).orElseThrow(() -> new RuntimeException("Document not found"));
        fileConfig.setPapersize(PaperSize.valueOf(request.getPaperSize()));
        fileConfig.setPaperRange(request.getPaperRange());
        fileConfig.setSides(Sides.valueOf(request.getSides()));
        fileConfig.setNumberOfCopies(request.getNumberOfCopies());
        fileConfig.setColor(request.isColor());
        fileConfig.setLayout(Layout.valueOf(request.getLayout()));
        fileConfigRepository.save(fileConfig);
        return new MessageResponse("FileConfiguration updated successfully");
    }

    @Override
    public MessageResponse deleteFileConfig(Long id) {
        FileConfig fileConfig = fileConfigRepository.findById(id).orElseThrow(() -> new RuntimeException("Document not found"));
        fileConfigRepository.deleteById(id);
        return new MessageResponse("FileConfiguration deleted successfully");
    }
}
