package com.pickxxx.woori.wooripickxxx.type;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@AllArgsConstructor
@Getter
// 카테고리 종류
public enum BenefitCategoryType {
    LOW_PLASTIC(101, "저플라스틱"),
    LOW_CARBON(102, "저탄소"),
    OPPOSITION_TO_ANIMAL_TESTING(103, "동물실험반대"),
    SAVE_CHILDRUN(104, "결식아동"),
    SAVE_ELDER(105, "노인보호"),
    WELFARE_FOR_THE_DISABLED(106, "장애인 복지"),
    PRODUCTS_MADE_BY_DISABILITIES(107, "장애인이 만든 제품"),
    RELIEF_GOODS(108, "구호물품");

    private final Integer categoryId;
    private final String categoryName;

    private static final Map<String, BenefitCategoryType> map = new HashMap<>();
    private static final Map<Integer, BenefitCategoryType> idMap = new HashMap<>();

    static {
        for (BenefitCategoryType benefitCategoryType : BenefitCategoryType.values()) {
            map.put(benefitCategoryType.categoryName, benefitCategoryType);
        }
    }

    static {
        for (BenefitCategoryType benefitCategoryType : BenefitCategoryType.values()) {
            idMap.put(benefitCategoryType.categoryId, benefitCategoryType);
        }
    }

    public static BenefitCategoryType constantOf(Integer categoryId) {
        BenefitCategoryType benefitCategoryType = idMap.get(categoryId);
        if (benefitCategoryType == null) {
            throw new IllegalArgumentException("일치하는 Enum 상수가 없습니다 : " + categoryId);
        }
        return benefitCategoryType;
    }

    public static boolean isExistId(Integer categoryId){
        BenefitCategoryType benefitCategoryType = idMap.get(categoryId);
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

    public static ArrayList<SaleProduct> getSaleProducts(BenefitCategoryType type){
        ArrayList<SaleProduct> saleProductsList = new ArrayList<>();

        switch(type){
            case LOW_PLASTIC:
                saleProductsList.add(SaleProduct.builder().productName("우유").salePercentage(5).build());
                saleProductsList.add(SaleProduct.builder().productName("샐러드").salePercentage(5).build());
                break;
            case LOW_CARBON:
                saleProductsList.add(SaleProduct.builder().productName("샐러드").salePercentage(5).build());
                break;
            case OPPOSITION_TO_ANIMAL_TESTING:
                saleProductsList.add(SaleProduct.builder().productName("육류").salePercentage(5).build());
                break;
            case SAVE_CHILDRUN:
                saleProductsList.add(SaleProduct.builder().productName("갤럭시").salePercentage(5).build());
                break;
            case SAVE_ELDER:
                saleProductsList.add(SaleProduct.builder().productName("노트북").salePercentage(5).build());
                break;
            case WELFARE_FOR_THE_DISABLED:
                saleProductsList.add(SaleProduct.builder().productName("휘발유").salePercentage(5).build());
                break;
            case PRODUCTS_MADE_BY_DISABILITIES:
                saleProductsList.add(SaleProduct.builder().productName("경유").salePercentage(5).build());
                break;
            case RELIEF_GOODS:
                saleProductsList.add(SaleProduct.builder().productName("유아용품").salePercentage(5).build());
                break;
        }
        return saleProductsList;
    }

    public static ArrayList<SaleCompany> getSaleCompanies(BenefitCategoryType type){
        ArrayList<SaleCompany> saleCompaniesList = new ArrayList<>();

        switch(type){
            case LOW_PLASTIC:
                saleCompaniesList.add(SaleCompany.builder().companyName("안랩").salePercentage(10).build());
                saleCompaniesList.add(SaleCompany.builder().companyName("우리마트").salePercentage(5).build());
                break;
            case LOW_CARBON:
                saleCompaniesList.add(SaleCompany.builder().companyName("삼성전자").salePercentage(5).build());
                break;
            case OPPOSITION_TO_ANIMAL_TESTING:
                saleCompaniesList.add(SaleCompany.builder().companyName("야놀자").salePercentage(5).build());
                break;
            case SAVE_CHILDRUN:
                saleCompaniesList.add(SaleCompany.builder().companyName("카카오").salePercentage(5).build());
                break;
            case SAVE_ELDER:
                saleCompaniesList.add(SaleCompany.builder().companyName("네이버").salePercentage(5).build());
                break;
            case WELFARE_FOR_THE_DISABLED:
                saleCompaniesList.add(SaleCompany.builder().companyName("쿠팡").salePercentage(5).build());
                break;
            case PRODUCTS_MADE_BY_DISABILITIES:
                saleCompaniesList.add(SaleCompany.builder().companyName("당근마켓").salePercentage(5).build());
                break;
            case RELIEF_GOODS:
                saleCompaniesList.add(SaleCompany.builder().companyName("배달의민족").salePercentage(5).build());
                break;
        }
        return saleCompaniesList;
    }

}