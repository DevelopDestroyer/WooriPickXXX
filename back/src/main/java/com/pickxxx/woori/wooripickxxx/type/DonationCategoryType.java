package com.pickxxx.woori.wooripickxxx.type;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@AllArgsConstructor
@Getter
// 카테고리 종류
public enum DonationCategoryType {
    ECO(201, "친환경"),
    SAVE_ANIMAL(202, "동물보호"),
    SAVE_CHILDRUN_AND_ELDER(203, "아동 / 노인"),
    DISABILITIES(204, "장애인"),
    RELIEF_GOODS(205, "구호물품");

    private final Integer categoryId;
    private final String categoryName;

    private static final Map<String, DonationCategoryType> map = new HashMap<>();
    private static final Map<Integer, DonationCategoryType> idMap = new HashMap<>();

    static {
        for (DonationCategoryType benefitCategoryType : DonationCategoryType.values()) {
            map.put(benefitCategoryType.categoryName, benefitCategoryType);
        }
    }

    static {
        for (DonationCategoryType benefitCategoryType : DonationCategoryType.values()) {
            idMap.put(benefitCategoryType.categoryId, benefitCategoryType);
        }
    }

    public static DonationCategoryType constantOf(Integer categoryId) {
        DonationCategoryType benefitCategoryType = idMap.get(categoryId);
        if (benefitCategoryType == null) {
            throw new IllegalArgumentException("일치하는 Enum 상수가 없습니다 : " + categoryId);
        }
        return benefitCategoryType;
    }

    public static boolean isExistId(Integer categoryId){
        DonationCategoryType benefitCategoryType = idMap.get(categoryId);
        if (benefitCategoryType == null) {
            return false;
        }
        return true;
    }

    public String getCategoryName() {
        return categoryName;
    }
    public Integer getCategoryId() {
        return categoryId;
    }

}