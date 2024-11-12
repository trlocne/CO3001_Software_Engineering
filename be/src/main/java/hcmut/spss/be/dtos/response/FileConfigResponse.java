package hcmut.spss.be.dtos.response;

import hcmut.spss.be.entity.fileConfig.FileConfig;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
        @NoArgsConstructor
        @Builder
        public class FileConfigResponse {
            private Long id;
            private Long fileId;
            private String fileName;
            private String paperSize;
            private String paperRange;
            private String sides;
            private int numberOfCopies;
            private String layout;
            private boolean color;

            public static FileConfigResponse toFileConfigResponse(FileConfig fileConfig) {
                return FileConfigResponse.builder()
                        .id(fileConfig.getId())
                        .fileId(fileConfig.getDocument().getDocumentId())
                        .fileName(fileConfig.getDocument().getDocumentName())
                        .paperSize(fileConfig.getSides().name())
                        .paperRange(fileConfig.getPaperRange())
                        .sides(fileConfig.getSides().name())
                        .numberOfCopies(fileConfig.getNumberOfCopies())
                        .layout(fileConfig.getLayout().name())
                .color(fileConfig.getColor())
                .build();
    }
}
