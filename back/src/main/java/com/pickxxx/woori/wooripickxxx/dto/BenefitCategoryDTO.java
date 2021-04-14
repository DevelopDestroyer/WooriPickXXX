package com.pickxxx.woori.wooripickxxx.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.pickxxx.woori.wooripickxxx.entity.BenefitCategory;
import com.pickxxx.woori.wooripickxxx.entity.Friend;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.lang.reflect.Array;
import java.util.ArrayList;

@Builder
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class BenefitCategoryDTO {
    private Long id;
    private String userNickname;
    private Integer categoryId;
    private ArrayList<BenefitCategoryDTO> benefitCategoryList;

    public BenefitCategory toEntity() {
        return BenefitCategory.builder()
                .userNickname(userNickname)
                .categoryId(categoryId)
                .build();
    }

}
