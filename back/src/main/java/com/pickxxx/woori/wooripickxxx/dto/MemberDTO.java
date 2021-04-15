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
    private String name;
    private String nickname;
    private Long id;
    private String phoneNumber;
    private String accountNumber;
    private Integer accountMoney;
    private Integer point;
    private List<MemberDTO> list;

    public static MemberDTO of(Member member) {
        return MemberDTO.builder()
                .id(member.getId())
                .name(member.getName())
                .phoneNumber(member.getPhoneNumber())
                .accountNumber(member.getAccountNumber())
                .accountMoney(member.getAccountMoney())
                .point(member.getPoint())
                .build();
    }

}
