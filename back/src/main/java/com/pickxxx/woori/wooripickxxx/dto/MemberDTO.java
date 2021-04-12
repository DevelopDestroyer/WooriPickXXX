package com.pickxxx.woori.wooripickxxx.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.pickxxx.woori.wooripickxxx.entity.Member;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.io.Serializable;

@Builder
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class MemberDTO implements Serializable {
    private final String name;
    private final String nickname;
    private final Long id;
    private final String phoneNumber;
    private final String accountNumber;
    private final Integer point;
    private final List<MemberDTO> list;

    public static MemberDTO of(Member member) {
        return MemberDTO.builder()
                .id(member.getId())
                .name(member.getName())
                .phoneNumber(member.getPhoneNumber())
                .accountNumber(member.getAccountNumber())
                .point(member.getPoint())
                .build();
    }

}
