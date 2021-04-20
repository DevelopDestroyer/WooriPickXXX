package com.pickxxx.woori.wooripickxxx.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.HashMap;

@Builder
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class TradingCounterDTO {
    private String userNickname;
    private HashMap<CharSequence, Integer> companyNameAndCnt;
    private Double recommendResult;
}
