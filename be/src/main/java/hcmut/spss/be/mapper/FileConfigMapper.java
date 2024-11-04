package hcmut.spss.be.mapper;

import hcmut.spss.be.response.FileConfigResponse;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import hcmut.spss.be.entity.fileConfig.FileConfig;
import hcmut.spss.be.request.FileConfigRequest;

@Mapper(componentModel = "spring")
public interface FileConfigMapper {
    FileConfig toFileConfig(FileConfigRequest request);

    FileConfigResponse toFileConfigResponse(FileConfig fileConfig);

    void updateFileConfig(FileConfigRequest request, @MappingTarget FileConfig fileConfig);
}
