package com.pickxxx.woori.wooripickxxx.common;

import com.pickxxx.woori.wooripickxxx.dto.TradingCounterDTO;

import java.util.Comparator;

public class TradingCounterDTOComparator implements Comparator<TradingCounterDTO> {
    @Override
    public int compare(TradingCounterDTO a, TradingCounterDTO b){
        if(a.getRecommendResult()>b.getRecommendResult()) return -1;
        if(a.getRecommendResult()<b.getRecommendResult()) return 1;
        return 0;
    }
}