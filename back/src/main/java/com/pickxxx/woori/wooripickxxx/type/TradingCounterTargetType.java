package com.pickxxx.woori.wooripickxxx.type;

public class TradingCounterTargetType {

    private static final String[] TRADING_COUNTER_TARGET_COMPANY_LIST =
            new String[]{"스타벅스", "S-OIL", "이마트", "CGV"};

    public static String checkTargetCompany(String targetCompanyName){
        String result = null;
        for(int i = 0; i < TRADING_COUNTER_TARGET_COMPANY_LIST.length; i++){
            if(targetCompanyName.contains(TRADING_COUNTER_TARGET_COMPANY_LIST[i])){
                result = TRADING_COUNTER_TARGET_COMPANY_LIST[i];
                break;
            }
        }
        return result;
    }
}
