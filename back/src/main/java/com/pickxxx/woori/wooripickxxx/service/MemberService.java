package com.pickxxx.woori.wooripickxxx.service;

import com.pickxxx.woori.wooripickxxx.common.*;
import com.pickxxx.woori.wooripickxxx.dto.*;
import com.pickxxx.woori.wooripickxxx.entity.BenefitCategory;
import com.pickxxx.woori.wooripickxxx.entity.Member;
import com.pickxxx.woori.wooripickxxx.entity.TradingCounter;
import com.pickxxx.woori.wooripickxxx.entity.TradingLedger;
import com.pickxxx.woori.wooripickxxx.exception.CustomException;
import com.pickxxx.woori.wooripickxxx.repository.BenefitCategoryRepository;
import com.pickxxx.woori.wooripickxxx.repository.MemberRepository;
import com.pickxxx.woori.wooripickxxx.repository.TradingCounterRepository;
import com.pickxxx.woori.wooripickxxx.repository.TradingLedgerRepository;
import com.pickxxx.woori.wooripickxxx.type.BenefitCategoryType;
import com.pickxxx.woori.wooripickxxx.type.ErrorCode;
import com.pickxxx.woori.wooripickxxx.type.TradingCounterTargetType;
import com.pickxxx.woori.wooripickxxx.type.TradingLedgerType;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;

@Slf4j
@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
    private final BenefitCategoryRepository benefitCategoryRepository;
    private final TradingLedgerRepository tradingLedgerRepository;
    private final TradingCounterRepository tradingCounterRepository;

    TimeCalcul time = new TimeCalcul();
    CosineSimilarity cosineSimilarity = new CosineSimilarity();

    public MemberDTO createMember(SignUpDTO signUpDTO) throws IOException {
        if (isExistUserByNickname(signUpDTO.getNickname())) {
            throw new CustomException(ErrorCode.NICKNAME_DUPLICATION);
        }
        signUpDTO.setPoint(0);

        //계좌에 대한 거래카운터 정보 추출 및 저장
        String userTransStr = WooribankAPI.getTransCustomerList(signUpDTO.getAccountNumber());
        String userTransArr[] = userTransStr.split(";");
        for(int i = 0; i < userTransArr.length; i++){
            String comName = TradingCounterTargetType.checkTargetCompany(userTransArr[i]);
            if(comName != null){
                ArrayList<TradingCounter> alreadyHaveTradingCounter = new ArrayList<>();
                alreadyHaveTradingCounter = tradingCounterRepository.findByUserNicknameAndCompanyName(signUpDTO.getNickname(), comName);
                //첫거래한 회사면 새로 카운터 저장
                if(alreadyHaveTradingCounter == null || alreadyHaveTradingCounter.size() == 0){
                    tradingCounterRepository.save(TradingCounter.builder()
                            .userNickname(signUpDTO.getNickname())
                            .companyName(comName)
                            .cnt(1)
                            .build());
                }
                else{ //이미 거래했었던 회사면 카운터 업데이트
                    tradingCounterRepository.updateCnt(alreadyHaveTradingCounter.get(0).getCnt() + 1, signUpDTO.getNickname(), comName);
                }
            }
        }

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

    public Response<Boolean> recommendTest() {
        HashMap<CharSequence, Integer> newUser = new HashMap<>();
        HashMap<CharSequence, Integer> user1 = new HashMap<>();
        HashMap<CharSequence, Integer> user2 = new HashMap<>();
        HashMap<CharSequence, Integer> user3 = new HashMap<>();
        HashMap<CharSequence, Integer> user4 = new HashMap<>();

        newUser.put("A", 10);
        newUser.put("B", 20);
        newUser.put("C", 0);
        newUser.put("D", 30);

        //수치는 낮은데 비율이 일치
        user1.put("A", 1);
        user1.put("B", 2);
        user1.put("C", 0);
        user1.put("D", 3);

        //수치는 유사한데 정반대 성향 예측
        user2.put("A", 30);
        user2.put("B", 20);
        user2.put("C", 50);
        user2.put("D", 10);

        //수치는 유사, 비율도 유사
        user3.put("A", 11);
        user3.put("B", 25);
        user3.put("C", 2);
        user3.put("D", 27);

        //0이 많음
        user4.put("A", 0);
        user4.put("B", 0);
        user4.put("C", 3);
        user4.put("D", 0);


        log.info("유사도 분석 [수치는 낮은데 비율이 일치] : " + cosineSimilarity.cosineSimilarity(newUser, user1).toString());
        log.info("유사도 분석 [수치는 유사한데 정반대 성향 예측] : " + cosineSimilarity.cosineSimilarity(newUser, user2).toString());
        log.info("유사도 분석 [수치는 유사한테 난수] : " + cosineSimilarity.cosineSimilarity(newUser, user3).toString());
        log.info("유사도 분석 [0이 많음] : " + cosineSimilarity.cosineSimilarity(newUser, user4).toString());

        return Response.ok(true);
    }

    public ArrayList<BenefitCategoryDTO> recommendCategories(String userNickname) {
        ArrayList<BenefitCategoryDTO> result = new ArrayList<>();
        ArrayList<Member> memberList = new ArrayList<>();
        ArrayList<TradingCounter> userData = new ArrayList<>();
        ArrayList<TradingCounterDTO> sampleData = new ArrayList<>();

        //우리은행API 사용전 샘플
        HashMap<CharSequence, Integer> newUser = new HashMap<>();
        userData = tradingCounterRepository.findByUserNickname(userNickname);
        for(int i = 0; i < userData.size(); i++){
            newUser.put(userData.get(i).getCompanyName(), userData.get(i).getCnt());
        }
        //newUser.put("CGV", 10);
        //newUser.put("이마트", 20);
        //newUser.put("S-OIL", 0);
        //newUser.put("스타벅스", 30);

        /*
        * 1. userTradingCounterInfo, newUser 변수에 요청유저의 거래내역정보를 우리은행 API로 받아와서 저장해야한다.
        * 2. TRADING_COUNTER에 신규유저의 거래내역을 저장해야해야한다.
        * 3. 1과 2의 내용은 우리은행API 사용가능범위에 따라 달라질 수 있다.
        * 4. 연동 후에는 import.sql에 데이터를 맞추어주는 작업이 필요하다.
        * 5. 기획자들과 어떤 거래내역(제휴회사)을 넣을 것인지 논의 필요
        * */
        TradingCounterDTO userTradingCounterInfo = TradingCounterDTO.builder()
                .userNickname(userNickname)
                .companyNameAndCnt(newUser)
                .build();

        memberList = memberRepository.findAll();
        for(int i = 0; i < memberList.size(); i++){
            if(false == memberList.get(i).getNickname().equals(userNickname)){
                ArrayList<TradingCounter> tradingCounterList = new ArrayList<>();
                tradingCounterList = tradingCounterRepository.findByUserNickname(memberList.get(i).getNickname());

                HashMap<CharSequence, Integer> sampleDataAboutOneUserOneCompany = new HashMap<>();
                for(int j = 0; j < tradingCounterList.size(); j++){
                    sampleDataAboutOneUserOneCompany.put(tradingCounterList.get(j).getCompanyName(), tradingCounterList.get(j).getCnt());
                }
                if(sampleDataAboutOneUserOneCompany != null && sampleDataAboutOneUserOneCompany.size() > 0){
                    sampleData.add(TradingCounterDTO.builder()
                            .userNickname(memberList.get(i).getNickname())
                            .companyNameAndCnt(sampleDataAboutOneUserOneCompany)
                            .recommendResult(cosineSimilarity.cosineSimilarity(userTradingCounterInfo.getCompanyNameAndCnt(), sampleDataAboutOneUserOneCompany))
                            .build());
                }
            }
        }
        //높은 순서로 정렬
        Collections.sort(sampleData, new TradingCounterDTOComparator());

        ArrayList<BenefitCategory> recommendCategory = new ArrayList<>();
        recommendCategory = benefitCategoryRepository.getBenefitCategoriesByUserNickname(sampleData.get(0).getUserNickname());
        log.info("추천매핑정보 : " + sampleData.get(0).getUserNickname());
        for(int i = 0; i < recommendCategory.size(); i++){
            result.add(BenefitCategoryDTO.builder().categoryId(recommendCategory.get(i).getCategoryId()).build());
        }

        return result;
    }

}
