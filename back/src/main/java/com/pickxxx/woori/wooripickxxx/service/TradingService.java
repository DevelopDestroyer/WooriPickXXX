package com.pickxxx.woori.wooripickxxx.service;

import com.pickxxx.woori.wooripickxxx.common.MemberDTOComparator;
import com.pickxxx.woori.wooripickxxx.common.TimeCalcul;
import com.pickxxx.woori.wooripickxxx.dto.*;
import com.pickxxx.woori.wooripickxxx.entity.BenefitCategory;
import com.pickxxx.woori.wooripickxxx.entity.Member;
import com.pickxxx.woori.wooripickxxx.entity.TradingLedger;
import com.pickxxx.woori.wooripickxxx.exception.CustomException;
import com.pickxxx.woori.wooripickxxx.repository.BenefitCategoryRepository;
import com.pickxxx.woori.wooripickxxx.repository.MemberRepository;
import com.pickxxx.woori.wooripickxxx.repository.TradingLedgerRepository;
import com.pickxxx.woori.wooripickxxx.type.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;

@Slf4j
@Service
@RequiredArgsConstructor
public class TradingService {
    private final TradingLedgerRepository tradingLedgerRepository;
    private final BenefitCategoryRepository benefitCategoryRepository;
    private final MemberRepository memberRepository;
    private final BlockService blockService;
    TimeCalcul time = new TimeCalcul();

    public boolean createBuy(BuyDTO buyDTO){
        Integer userAccountMoney = memberRepository.findByNickname(buyDTO.getUserNickname()).getAccountMoney();
        Integer userPoint = memberRepository.findByNickname(buyDTO.getUserNickname()).getPoint();
        ArrayList<BenefitCategory> userBenefitCategoryList = benefitCategoryRepository.getBenefitCategoriesByUserNickname(buyDTO.getUserNickname());
        ArrayList<SaleCompany> saleCompaniesList = new ArrayList<>();
        ArrayList<SaleProduct> saleProductsList = new ArrayList<>();
        boolean isCompanySale = false;
        Double userSalePrice = 0.0;
        Integer categoryIndex = -1;

        //해당 사용자의 구독 카테고리에 따른 혜택 회사 및 할인품목 정보 가져오기
        for(int i = 0; i < userBenefitCategoryList.size(); i++){
            saleProductsList.addAll(BenefitCategoryType.getSaleProducts(BenefitCategoryType.constantOf(userBenefitCategoryList.get(i).getCategoryId())));
            saleCompaniesList.addAll(BenefitCategoryType.getSaleCompanies(BenefitCategoryType.constantOf(userBenefitCategoryList.get(i).getCategoryId())));
        }

        //계좌 잔액 확인
        if(userAccountMoney < buyDTO.totalPrice()){
            throw new CustomException(ErrorCode.NOT_ENOUGH_ACCOUNT_MONEY);
        }

        //제휴회사 할인 계산
        for(int i = 0; i < saleCompaniesList.size(); i++) {
            if (buyDTO.getCompanyName().equals(saleCompaniesList.get(i).getCompanyName())) {
                isCompanySale = true;
                categoryIndex = userBenefitCategoryList.get(i).getCategoryId();
                log.info("회사할인 대상 입니다. : " + buyDTO.getCompanyName());
                userSalePrice = (double) buyDTO.totalPrice() * ((double) saleCompaniesList.get(i).getSalePercentage() / 100);
                break;
            }
        }

        //제품 할인 계산
        if(false == isCompanySale){
            for(int i = 0; i < buyDTO.getBuyProductList().size(); i++){
                for(int j = 0; j < saleProductsList.size(); j++){
                    if (buyDTO.getBuyProductList().get(i).getName().contains(saleProductsList.get(j).getProductName())) {
                        categoryIndex = userBenefitCategoryList.get(i).getCategoryId();
                        log.info("제품할인 대상 입니다. : " + buyDTO.getBuyProductList().get(i).getName());
                        userSalePrice += (double)buyDTO.getBuyProductList().get(i).getPrice() * ((double) saleProductsList.get(i).getSalePercentage() / 100);
                        break;
                    }
                }
            }
        }

        //사용자 포인트 적립 및 계좌잔액 변동
        memberRepository.updateAccountMoneyAndPoint(buyDTO.getUserNickname(), userAccountMoney - buyDTO.totalPrice(), userPoint + (int)Math.round(userSalePrice));

        //거래장부 기록
        TradingLedger tradingLedger = TradingLedger.builder()
                .userNickname(buyDTO.getUserNickname())
                .tradingType(TradingLedgerType.BENEFIT.getTradingLedgerTypeName())
                .companyName(buyDTO.getCompanyName())
                .totalBuyPrice(buyDTO.totalPrice() * -1)
                .categoryId(categoryIndex)
                .point((int)Math.round(userSalePrice))
                .date(time.getNowTime())
                .build();
        tradingLedgerRepository.save(tradingLedger);

        return true;
    }

    //기부하기
    public boolean createDonation(DonationDTO donationDTO){
        Integer userAccountMoney = memberRepository.findByNickname(donationDTO.getUserNickname()).getAccountMoney();
        Integer userPoint = memberRepository.findByNickname(donationDTO.getUserNickname()).getPoint();

        //포인트 잔액 확인
        if(userPoint < donationDTO.getDonationPoint()){
            throw new CustomException(ErrorCode.NOT_ENOUGH_POINT);
        }

        //사용자 포인트 적립 및 계좌잔액 변동
        memberRepository.updateAccountMoneyAndPoint(donationDTO.getUserNickname(), userAccountMoney, userPoint - donationDTO.getDonationPoint());

        //거래장부 기록
        TradingLedger tradingLedger = TradingLedger.builder()
                .userNickname(donationDTO.getUserNickname())
                .tradingType(TradingLedgerType.DONATION.getTradingLedgerTypeName())
                .companyName("")
                .totalBuyPrice(0)
                .categoryId(donationDTO.getDonationId())
                .point(donationDTO.getDonationPoint() * -1)
                .date(time.getNowTime()).build();
        tradingLedgerRepository.save(tradingLedger);

        //블록체인 기록
        blockService.mineBlock(donationDTO.getUserNickname()+";"
                + "우리핏베네핏 기부;"
                + donationDTO.getDonationPoint() + ";"
                + DonationCategoryType.constantOf(donationDTO.getDonationId()).getCategoryName());

        return true;
    }

    //기부 통계
    public DonationStatisticsDTO donationStatistic(){
        DonationStatisticsDTO donationStatisticsDTO = null;

        //1. for 이번달 기부 총금액 계산
        Integer donaTocalPoint = 0;

        //2. for 총 기부 현황 통계
        ArrayList<DonationDTO> doneRatioCal = new ArrayList<>();
        Integer ECO = 0;
        Integer SAVE_ANIMAL = 0;
        Integer SAVE_CHILDRUN_AND_ELDER = 0;
        Integer DISABILITIES = 0;
        Integer RELIEF_GOODS = 0;

        //1. 이번달 기부 총금액 계산
        ArrayList<TradingLedger> thisMonthTradingLedger
                = tradingLedgerRepository.findAllByDateGreaterThanEqualAndDateLessThanEqualAndTradingTypeEquals(time.thisMonthStart(), time.thisMonthEnd(), TradingLedgerType.DONATION.getTradingLedgerTypeName());
        for(int i = 0; i < thisMonthTradingLedger.size(); i++){
            donaTocalPoint += thisMonthTradingLedger.get(i).getPoint();
        }
        donaTocalPoint = donaTocalPoint * -1;

        //2. 총 기부 현황 통계
        ArrayList<TradingLedger> totalDonationCategoryTradingLedger
                = tradingLedgerRepository.findAllByTradingTypeEquals(TradingLedgerType.DONATION.getTradingLedgerTypeName());
        for(int i = 0; i < totalDonationCategoryTradingLedger.size(); i++){
            if(DonationCategoryType.ECO.getCategoryId().toString().equals(totalDonationCategoryTradingLedger.get(i).getCategoryId().toString())){
                ECO++;
            }

            else if(DonationCategoryType.SAVE_ANIMAL.getCategoryId().toString().equals(totalDonationCategoryTradingLedger.get(i).getCategoryId().toString())){
                SAVE_ANIMAL++;
            }

            else if(DonationCategoryType.SAVE_CHILDRUN_AND_ELDER.getCategoryId().toString().equals(totalDonationCategoryTradingLedger.get(i).getCategoryId().toString())){
                SAVE_CHILDRUN_AND_ELDER++;
            }

            else if(DonationCategoryType.DISABILITIES.getCategoryId().toString().equals(totalDonationCategoryTradingLedger.get(i).getCategoryId().toString())){
                DISABILITIES++;
            }

            else if(DonationCategoryType.RELIEF_GOODS.getCategoryId().toString().equals(totalDonationCategoryTradingLedger.get(i).getCategoryId().toString())){
                RELIEF_GOODS++;
            }

        }
        doneRatioCal.add(DonationDTO.builder().donationId(DonationCategoryType.ECO.getCategoryId()).totalDonationCount(ECO).build());
        doneRatioCal.add(DonationDTO.builder().donationId(DonationCategoryType.SAVE_ANIMAL.getCategoryId()).totalDonationCount(SAVE_ANIMAL).build());
        doneRatioCal.add(DonationDTO.builder().donationId(DonationCategoryType.SAVE_CHILDRUN_AND_ELDER.getCategoryId()).totalDonationCount(SAVE_CHILDRUN_AND_ELDER).build());
        doneRatioCal.add(DonationDTO.builder().donationId(DonationCategoryType.DISABILITIES.getCategoryId()).totalDonationCount(DISABILITIES).build());
        doneRatioCal.add(DonationDTO.builder().donationId(DonationCategoryType.RELIEF_GOODS.getCategoryId()).totalDonationCount(RELIEF_GOODS).build());

        //3. 지난달 기부왕
        ArrayList<Member> donaKing = new ArrayList<>();
        ArrayList<MemberDTO> donaKingDTO = new ArrayList<>();

        donaKing = memberRepository.findAll();
        for(int i = 0; i < donaKing.size(); i++){
            donaKing.get(i).setPoint(0);
            ArrayList<TradingLedger> allUserDonationTrading = new ArrayList<>();
            allUserDonationTrading = tradingLedgerRepository.findAllByUserNicknameEqualsAndTradingTypeEqualsAndDateGreaterThanEqualAndDateLessThanEqual(donaKing.get(i).getNickname(), TradingLedgerType.DONATION.getTradingLedgerTypeName(), time.agoMonthStart(-1), time.agoMonthEnd(-1));
            for(int j = 0; j < allUserDonationTrading.size(); j++){
                donaKing.get(i).setPoint(donaKing.get(i).getPoint() + allUserDonationTrading.get(j).getPoint());
            }
            donaKing.get(i).setPoint(donaKing.get(i).getPoint() * -1);
            donaKingDTO.add(MemberDTO.builder().nickname(donaKing.get(i).getNickname()).point(donaKing.get(i).getPoint()).build());
        }
        //높은 순서로 정렬
        Collections.sort(donaKingDTO, new MemberDTOComparator());

        return DonationStatisticsDTO.builder()
                .totalDonationMoney(donaTocalPoint)
                .donationRatioStatus(doneRatioCal)
                .memberDTOs(donaKingDTO)
                .build();
    }

    //혜택적립내역
    public ArrayList<TradingLedgerDTO> benefitList(String userNickname){
        ArrayList<TradingLedger> tl = new ArrayList<>();
        ArrayList<TradingLedgerDTO> tlDTO = new ArrayList<>();

        tl = tradingLedgerRepository.findAllByUserNicknameAndAndTradingTypeOrderByDateDesc(userNickname, TradingLedgerType.BENEFIT.getTradingLedgerTypeName());
        for(int i = 0; i < tl.size(); i++){
            tlDTO.add(TradingLedgerDTO.builder()
            .date(tl.get(i).getDate())
            .totalBuyPrice(tl.get(i).getTotalBuyPrice())
            .point(tl.get(i).getPoint())
            .companyName(tl.get(i).getCompanyName())
            .categoryId(tl.get(i).getCategoryId())
            .build());
        }
        return tlDTO;
    }

}
