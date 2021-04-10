package com.pickxxx.woori.wooripickxxx.service;

import com.pickxxx.woori.wooripickxxx.dto.MemberDTO;
import com.pickxxx.woori.wooripickxxx.dto.SignUpDTO;
import com.pickxxx.woori.wooripickxxx.exception.CustomException;
import com.pickxxx.woori.wooripickxxx.repository.MemberRepository;
import com.pickxxx.woori.wooripickxxx.type.ErrorCode;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;

    public MemberDTO createMember(SignUpDTO signUpDTO) {
        if (isExistUserByPhoneNumber(signUpDTO.getPhoneNumber())) {
            throw new CustomException(ErrorCode.PHONENUMBER_DUPLICATION);
        }
        return MemberDTO.of(memberRepository.save(signUpDTO.toEntity()));
    }

    private boolean isExistUserByPhoneNumber(String phoneNumber) {
        return memberRepository.existsByPhoneNumber(phoneNumber);
    }

}
