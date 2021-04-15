package com.pickxxx.woori.wooripickxxx.service;

import com.pickxxx.woori.wooripickxxx.dto.BenefitCategoryDTO;
import com.pickxxx.woori.wooripickxxx.dto.MemberDTO;
import com.pickxxx.woori.wooripickxxx.dto.SignUpDTO;
import com.pickxxx.woori.wooripickxxx.entity.BenefitCategory;
import com.pickxxx.woori.wooripickxxx.entity.Member;
import com.pickxxx.woori.wooripickxxx.exception.CustomException;
import com.pickxxx.woori.wooripickxxx.repository.BenefitCategoryRepository;
import com.pickxxx.woori.wooripickxxx.repository.MemberRepository;
import com.pickxxx.woori.wooripickxxx.type.BenefitCategoryType;
import com.pickxxx.woori.wooripickxxx.type.ErrorCode;
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

}
