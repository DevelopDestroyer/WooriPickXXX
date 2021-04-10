package com.pickxxx.woori.wooripickxxx.dto;

import com.pickxxx.woori.wooripickxxx.entity.Member;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignUpDTO {
    private String name;
    private String password;
    private String phoneNumber;

    public Member toEntity() {
        return Member.builder()
                .name(name)
                .password(password)
                .phoneNumber(phoneNumber)
                .build();
    }
}
