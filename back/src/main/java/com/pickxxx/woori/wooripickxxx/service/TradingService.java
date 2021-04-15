package com.pickxxx.woori.wooripickxxx.service;

import com.pickxxx.woori.wooripickxxx.common.TimeCalcul;
import com.pickxxx.woori.wooripickxxx.dto.BuyDTO;
import com.pickxxx.woori.wooripickxxx.dto.DonationDTO;
import com.pickxxx.woori.wooripickxxx.entity.BenefitCategory;
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

@Slf4j
@Service
@RequiredArgsConstructor
public class TradingService {
    private final TradingLedgerRepository tradingLedgerRepository;
    private final BenefitCategoryRepository benefitCategoryRepository;
    private final MemberRepository memberRepository;
    TimeCalcul time = new TimeCalcul();

    public boolean createBuy(BuyDTO buyDTO){
        Integer userAccountMoney = memberRepository.findByNickname(buyDTO.getUserNickname()).getAccountMoney();
        Integer userPoint = memberRepository.findByNickname(buyDTO.getUserNickname()).getPoint();
        ArrayList<BenefitCategory> userBenefitCategoryList = benefitCategoryRepository.getBenefitCategoriesByUserNickname(buyDTO.getUserNickname());
        ArrayList<SaleCompany> saleCompaniesList = new ArrayList<>();
        ArrayList<SaleProduct> saleProductsList = new ArrayList<>();
        boolean isCompanySale = false;
        Double userSalePrice = 0.0;

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
        TradingLedger tradingLedger = TradingLedger.builder().userNickname(buyDTO.getUserNickname()).tradingType(TradingLedgerType.BENEFIT.getTradingLedgerTypeName()).point((int)Math.round(userSalePrice)).date(time.getNowTime()).build();
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
        TradingLedger tradingLedger = TradingLedger.builder().userNickname(donationDTO.getUserNickname()).tradingType(TradingLedgerType.DONATION.getTradingLedgerTypeName()).point(donationDTO.getDonationPoint() * -1).date(time.getNowTime()).build();
        tradingLedgerRepository.save(tradingLedger);

        return true;
    }
}
