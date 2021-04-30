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
    RELIEF_GOODS(108, "구호물품"),
    VEGAN(109, "비건");

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
                saleProductsList.add(SaleProduct.builder().productName("갤럭시s10").salePercentage(5).build());
                saleProductsList.add(SaleProduct.builder().productName("갤럭시s21").salePercentage(5).build());
                break;
            case LOW_CARBON:
                saleProductsList.add(SaleProduct.builder().productName("갤럭시s21").salePercentage(5).build());
                break;
            case OPPOSITION_TO_ANIMAL_TESTING:
                saleProductsList.add(SaleProduct.builder().productName("갤럭시s21").salePercentage(5).build());
                break;
            case SAVE_CHILDRUN:
                saleProductsList.add(SaleProduct.builder().productName("갤럭시s21").salePercentage(5).build());
                break;
            case SAVE_ELDER:
                saleProductsList.add(SaleProduct.builder().productName("갤럭시s21").salePercentage(5).build());
                break;
            case WELFARE_FOR_THE_DISABLED:
                saleProductsList.add(SaleProduct.builder().productName("갤럭시s21").salePercentage(5).build());
                break;
            case PRODUCTS_MADE_BY_DISABILITIES:
                saleProductsList.add(SaleProduct.builder().productName("갤럭시s21").salePercentage(5).build());
                break;
            case RELIEF_GOODS:
                saleProductsList.add(SaleProduct.builder().productName("갤럭시s21").salePercentage(5).build());
                break;
            case VEGAN:
                saleProductsList.add(SaleProduct.builder().productName("갤럭시s21").salePercentage(10).build());
                break;
        }
        return saleProductsList;
    }

    public static ArrayList<SaleCompany> getSaleCompanies(BenefitCategoryType type){
        ArrayList<SaleCompany> saleCompaniesList = new ArrayList<>();

        switch(type){
            case LOW_PLASTIC:
                saleCompaniesList.add(SaleCompany.builder().companyName("나이키").salePercentage(50).build());
                saleCompaniesList.add(SaleCompany.builder().companyName("더피커").salePercentage(20).build());
                saleCompaniesList.add(SaleCompany.builder().companyName("보틀팩토리").salePercentage(20).build());
                saleCompaniesList.add(SaleCompany.builder().companyName("지구샵").salePercentage(20).build());
                saleCompaniesList.add(SaleCompany.builder().companyName("송포어스").salePercentage(20).build());
                saleCompaniesList.add(SaleCompany.builder().companyName("지구별가게").salePercentage(20).build());

                break;
            case LOW_CARBON:
                saleCompaniesList.add(SaleCompany.builder().companyName("하이트진로").salePercentage(20).build());
                saleCompaniesList.add(SaleCompany.builder().companyName("포스코").salePercentage(20).build());
                saleCompaniesList.add(SaleCompany.builder().companyName("(주)기업과사람들").salePercentage(20).build());
                saleCompaniesList.add(SaleCompany.builder().companyName("풀무원").salePercentage(20).build());
                break;
            case OPPOSITION_TO_ANIMAL_TESTING:
                saleCompaniesList.add(SaleCompany.builder().companyName("아로마티카").salePercentage(20).build());
                saleCompaniesList.add(SaleCompany.builder().companyName("이너프프로젝트").salePercentage(20).build());
                saleCompaniesList.add(SaleCompany.builder().companyName("세럼카인드").salePercentage(20).build());
                saleCompaniesList.add(SaleCompany.builder().companyName("에코라운드").salePercentage(20).build());
                break;
            case SAVE_CHILDRUN:
                saleCompaniesList.add(SaleCompany.builder().companyName("진짜 파스타").salePercentage(20).build());
                saleCompaniesList.add(SaleCompany.builder().companyName("아재커피 종로구청점").salePercentage(20).build());
                saleCompaniesList.add(SaleCompany.builder().companyName("알티프로젝트카페").salePercentage(20).build());
                saleCompaniesList.add(SaleCompany.builder().companyName("엔플럼헤어").salePercentage(20).build());
                break;
            case SAVE_ELDER:
                saleCompaniesList.add(SaleCompany.builder().companyName("정스팜").salePercentage(20).build());
                saleCompaniesList.add(SaleCompany.builder().companyName("성심당").salePercentage(20).build());
                saleCompaniesList.add(SaleCompany.builder().companyName("지엔티").salePercentage(20).build());
                saleCompaniesList.add(SaleCompany.builder().companyName("노노카페").salePercentage(20).build());
                break;
            case WELFARE_FOR_THE_DISABLED:
                saleCompaniesList.add(SaleCompany.builder().companyName("호텔 엘린").salePercentage(20).build());
                saleCompaniesList.add(SaleCompany.builder().companyName("나는카페").salePercentage(20).build());
                saleCompaniesList.add(SaleCompany.builder().companyName("스위트위드").salePercentage(20).build());
                saleCompaniesList.add(SaleCompany.builder().companyName("섬섬옥수").salePercentage(20).build());
                break;
            case PRODUCTS_MADE_BY_DISABILITIES:
                saleCompaniesList.add(SaleCompany.builder().companyName("꿈드래 쇼핑몰").salePercentage(20).build());
                saleCompaniesList.add(SaleCompany.builder().companyName("마로원").salePercentage(20).build());
                saleCompaniesList.add(SaleCompany.builder().companyName("씨앤비빌리지").salePercentage(20).build());
                saleCompaniesList.add(SaleCompany.builder().companyName("히즈빈스").salePercentage(20).build());
                break;
            case RELIEF_GOODS:
                saleCompaniesList.add(SaleCompany.builder().companyName("희망브리지").salePercentage(20).build());
                saleCompaniesList.add(SaleCompany.builder().companyName("쓰리킹스인터내셔널").salePercentage(20).build());
                saleCompaniesList.add(SaleCompany.builder().companyName("본죽").salePercentage(20).build());
                saleCompaniesList.add(SaleCompany.builder().companyName("솜씨").salePercentage(20).build());
                break;
            case VEGAN:
                saleCompaniesList.add(SaleCompany.builder().companyName("Melixir").salePercentage(20).build());
                saleCompaniesList.add(SaleCompany.builder().companyName("씨젬므쥬르").salePercentage(20).build());
                saleCompaniesList.add(SaleCompany.builder().companyName("발우공양").salePercentage(20).build());
                saleCompaniesList.add(SaleCompany.builder().companyName("몽크스부처").salePercentage(20).build());
                break;
        }
        return saleCompaniesList;
    }

    public static Integer getCategoryIdAboutCompanyName(String comName){
        if(comName.equals("나이키") || comName.equals("더피커") || comName.equals("보틀팩토리") || comName.equals("지구샵")
        || comName.equals("송포어스") || comName.equals("지구별가게")){
            return 201;
        }

        else if(comName.equals("하이트진로") || comName.equals("포스코") || comName.equals("(주)기업과사람들") || comName.equals("풀무원")){
            return 202;
        }

        else if(comName.equals("아로마티카") || comName.equals("이너프프로젝트") || comName.equals("세럼카인드") || comName.equals("에코라운드")){
            return 203;
        }

        else if(comName.equals("진짜 파스타") || comName.equals("아재커피 종로구청점") || comName.equals("알티프로젝트카페") || comName.equals("엔플럼헤어")){
            return 204;
        }

        else if(comName.equals("정스팜") || comName.equals("성심당") || comName.equals("지엔티") || comName.equals("노노카페")){
            return 205;
        }


        else if(comName.equals("호텔 엘린") || comName.equals("나는카페") || comName.equals("스위트위드") || comName.equals("섬섬옥수")){
            return 206;
        }

        else if(comName.equals("꿈드래 쇼핑몰") || comName.equals("마로원") || comName.equals("씨앤비빌리지") || comName.equals("히즈빈스")){
            return 207;
        }

        else if(comName.equals("Melixir") || comName.equals("씨젬므쥬르") || comName.equals("발우공양") || comName.equals("몽크스부처")){
            return 208;
        }

        else {
            return 209;
        }

    }

}