package com.pickxxx.woori.wooripickxxx.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class CompanyDTO {
    private String companyName;
    private Integer categoryId;
    private String description;
    private String thumbNailPath;
    private Integer totalLike;
    private boolean userLike;
}
