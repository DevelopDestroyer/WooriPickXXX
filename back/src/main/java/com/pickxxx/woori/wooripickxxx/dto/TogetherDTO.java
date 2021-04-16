package com.pickxxx.woori.wooripickxxx.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.pickxxx.woori.wooripickxxx.common.BuyProduct;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class TogetherDTO {
    private Integer thisMonthBenefitPoint;
    private Integer ago3MonthBenefitPoint;
    private Integer myRank;
    private Integer aveRank;
}
