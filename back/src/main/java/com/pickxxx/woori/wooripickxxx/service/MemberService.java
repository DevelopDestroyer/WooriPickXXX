package com.pickxxx.woori.wooripickxxx.service;

import com.pickxxx.woori.wooripickxxx.common.TimeCalcul;
import com.pickxxx.woori.wooripickxxx.dto.BenefitCategoryDTO;
import com.pickxxx.woori.wooripickxxx.dto.MemberDTO;
import com.pickxxx.woori.wooripickxxx.dto.SignUpDTO;
import com.pickxxx.woori.wooripickxxx.dto.TogetherDTO;
import com.pickxxx.woori.wooripickxxx.entity.BenefitCategory;
import com.pickxxx.woori.wooripickxxx.entity.Member;
import com.pickxxx.woori.wooripickxxx.entity.TradingLedger;
import com.pickxxx.woori.wooripickxxx.exception.CustomException;
import com.pickxxx.woori.wooripickxxx.repository.BenefitCategoryRepository;
import com.pickxxx.woori.wooripickxxx.repository.MemberRepository;
import com.pickxxx.woori.wooripickxxx.repository.TradingLedgerRepository;
import com.pickxxx.woori.wooripickxxx.type.BenefitCategoryType;
import com.pickxxx.woori.wooripickxxx.type.ErrorCode;
import com.pickxxx.woori.wooripickxxx.type.TradingLedgerType;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Slf4j
@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
    private final BenefitCategoryRepository benefitCategoryRepository;
    private final TradingLedgerRepository tradingLedgerRepository;

    TimeCalcul time = new TimeCalcul();

    public MemberDTO createMember(SignUpDTO signUpDTO) {
        if (isExistUserByNickname(signUpDTO.getNickname())) {
            throw new CustomException(ErrorCode.NICKNAME_DUPLICATION);
        }
        signUpDTO.setPoint(0);
        return MemberDTO.of(memberRepository.save(signUpDTO.toEntity()));
    }

    public MemberDTO getMyInfo(String nickname){
        //존재하는 사용자 인지 확인(본인)
        if (false == memberRepository.existsByNickname(nickname)){
            throw new CustomException(ErrorCode.USER_NONE);
        }

        Member member = memberRepository.findByNickname(nickname);
        return MemberDTO.builder()
                .name(member.getName())
                .nickname(member.getNickname())
                .phoneNumber(member.getPhoneNumber())
                .accountNumber(member.getAccountNumber())
                .accountMoney(member.getAccountMoney())
                .point(member.getPoint())
                .build();
    }

    public boolean createBenefitCategories(BenefitCategoryDTO benefitCategoryDTO){
        //존재하는 사용자 인지 확인(본인)
        if (false == memberRepository.existsByNickname(benefitCategoryDTO.getBenefitCategoryList().get(0).getUserNickname())){
            throw new CustomException(ErrorCode.USER_NONE);
        }
        //두개의 카테고리를 추가하는 것이 맞는지 확인
        if (benefitCategoryDTO.getBenefitCategoryList().size() != 2){
            throw new CustomException(ErrorCode.IS_NOT_2_CATOTEGORIES);
        }
        //두개의 카테고리에 대해 닉네임이 일치하는지 확인
        if (false == benefitCategoryDTO.getBenefitCategoryList().get(0).getUserNickname().equals(
                benefitCategoryDTO.getBenefitCategoryList().get(1).getUserNickname())){
            throw new CustomException(ErrorCode.IS_NOT_SAME_NICKNAME);
        }
        //실존하는 카테고리인지 체크
        for(int i = 0; i < benefitCategoryDTO.getBenefitCategoryList().size(); i++) {
            if(false == BenefitCategoryType.isExistId(benefitCategoryDTO.getBenefitCategoryList().get(i).getCategoryId())){
                throw new CustomException(ErrorCode.NOT_EXIST_CATEGORY);
            }
        }

        //기존 카테고리 제거
        benefitCategoryRepository.removeByUserNickname(benefitCategoryDTO.getBenefitCategoryList().get(0).getUserNickname());

        for(int i = 0; i < benefitCategoryDTO.getBenefitCategoryList().size(); i++) {
            benefitCategoryRepository.save(benefitCategoryDTO.getBenefitCategoryList().get(i).toEntity());
        }

        return true;
    }

    public boolean isExistUserByNickname(String nickname) {
        BenefitCategoryType.SAVE_CHILDRUN.getCategoryId();
        return memberRepository.existsByNickname(nickname);
    }

    public ArrayList<BenefitCategoryDTO> getUserBenefitCatefories(String userNickname){
        ArrayList<BenefitCategory> cateInfo = new ArrayList<>();
        ArrayList<BenefitCategoryDTO> result = new ArrayList<>();

        cateInfo = benefitCategoryRepository.getBenefitCategoriesByUserNickname(userNickname);
        for(int i = 0; i < cateInfo.size(); i++){
            result.add(BenefitCategoryDTO.builder().categoryId(cateInfo.get(i).getCategoryId()).build());
        }

        return result;
    }

    public TogetherDTO together(String userNickname){
        Integer thisMonthBenefit = 0;
        Integer ago3MonthBenefit = 0;
        Integer myRan = 0;
        Integer aveRan = 0;

        //이번달 내 혜택
        ArrayList<TradingLedger> myTradingLedgerThisMonth = new ArrayList<>();
        myTradingLedgerThisMonth = tradingLedgerRepository.findAllByUserNicknameEqualsAndTradingTypeEqualsAndDateGreaterThanEqualAndDateLessThanEqual(userNickname, TradingLedgerType.BENEFIT.getTradingLedgerTypeName(), time.thisMonthStart(), time.thisMonthEnd());
        for(int i = 0; i < myTradingLedgerThisMonth.size(); i++){
            thisMonthBenefit += myTradingLedgerThisMonth.get(i).getPoint();
        }

        //3달전 내 혜택
        ArrayList<TradingLedger> myTradingLedger3AgoMonth = new ArrayList<>();
        myTradingLedger3AgoMonth = tradingLedgerRepository.findAllByUserNicknameEqualsAndTradingTypeEqualsAndDateGreaterThanEqualAndDateLessThanEqual(userNickname, TradingLedgerType.BENEFIT.getTradingLedgerTypeName(), time.agoMonthStart(-3), time.agoMonthEnd(-1));
        for(int i = 0; i < myTradingLedger3AgoMonth.size(); i++){
            ago3MonthBenefit += myTradingLedger3AgoMonth.get(i).getPoint();
        }

        //전체 랭킹 가져오기
        ArrayList<Member> allUser = new ArrayList<>();
        allUser = memberRepository.findByOrderByPointDesc();

        //나의 랭킹
        Integer myIndex = 0;
        Integer totalPointAllUser = 0;
        boolean isSearchMyIndex = false;
        for(int i = 0; i < allUser.size(); i++){
            if(false == isSearchMyIndex){
                myIndex++;
            }
            if(allUser.get(i).getNickname().equals(userNickname)){
                isSearchMyIndex = true;
            }
            totalPointAllUser += allUser.get(i).getPoint();
        }
        myRan = (int)Math.round(((double)myIndex / (double)allUser.size()) * 100);

        //평균 랭킹
        Integer avePoint = (int)Math.round((double)totalPointAllUser / (double)allUser.size());
        Integer aveIndex = 0;
        for(int i = 0; i < allUser.size(); i++){
            aveIndex++;
            if(allUser.get(i).getPoint() < avePoint){
                break;
            }
        }
        aveRan = (int)Math.round(((double)aveIndex / (double)allUser.size()) * 100);

        return TogetherDTO.builder()
                .myRank(myRan)
                .aveRank(aveRan)
                .thisMonthBenefitPoint(thisMonthBenefit)
                .ago3MonthBenefitPoint(ago3MonthBenefit)
                .build();
    }

}
