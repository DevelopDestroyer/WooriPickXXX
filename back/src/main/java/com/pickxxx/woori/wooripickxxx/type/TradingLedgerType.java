package com.pickxxx.woori.wooripickxxx.type;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@AllArgsConstructor
@Getter
// 카테고리 종류
public enum TradingLedgerType {
    BENEFIT("BENEFIT"),
    DONATION("DONATION"),
    WITHDRAW("WITHDRAW");

    private final String TradingLedgerTypeName;

    private static final Map<String, TradingLedgerType> map = new HashMap<>();

    static {
        for (TradingLedgerType benefitCategoryType : TradingLedgerType.values()) {
            map.put(benefitCategoryType.TradingLedgerTypeName, benefitCategoryType);
        }
    }

    public static TradingLedgerType constantOf(String TradingLedgerTypeName) {
        TradingLedgerType benefitCategoryType = map.get(TradingLedgerTypeName);
        if (benefitCategoryType == null) {
            throw new IllegalArgumentException("일치하는 Enum 상수가 없습니다 : " + TradingLedgerTypeName);
        }
        return benefitCategoryType;
    }

    public String getCategoryName() {
        return TradingLedgerTypeName;
    }

}