package com.pickxxx.woori.wooripickxxx.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.pickxxx.woori.wooripickxxx.entity.TradingLedger;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class TradingLedgerDTO {
    private Long id;
    private String userNickname;
    private String tradingType;
    private Integer categoryId;
    private Integer totalAccountMoney;
    private Integer point;
    private String date;

    public TradingLedger toEntity() {
        return TradingLedger.builder()
                .userNickname(userNickname)
                .tradingType(tradingType)
                .categoryId(categoryId)
                .totalAccountMoney(totalAccountMoney)
                .point(point)
                .date(date)
                .build();
    }

}
