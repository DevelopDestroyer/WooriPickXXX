package com.pickxxx.woori.wooripickxxx.service;

import com.pickxxx.woori.wooripickxxx.common.CosineSimilarity;
import com.pickxxx.woori.wooripickxxx.common.Response;
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
import java.util.HashMap;

@Slf4j
@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
    private final BenefitCategoryRepository benefitCategoryRepository;
    private final TradingLedgerRepository tradingLedgerRepository;

    TimeCalcul time = new TimeCalcul();
    CosineSimilarity cosineSimilarity = new CosineSimilarity();

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

    public Response<Boolean> recommend() {
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

}
