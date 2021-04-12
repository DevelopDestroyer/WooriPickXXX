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
        if (isExistUserByNickname(signUpDTO.getNickname())) {
            throw new CustomException(ErrorCode.NICKNAME_DUPLICATION);
        }
        signUpDTO.setPoint(0);
        return MemberDTO.of(memberRepository.save(signUpDTO.toEntity()));
    }

    private boolean isExistUserByNickname(String nickname) {
        return memberRepository.existsByNickname(nickname);
    }

}
