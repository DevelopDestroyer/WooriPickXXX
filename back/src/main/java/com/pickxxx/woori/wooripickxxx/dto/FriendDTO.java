package com.pickxxx.woori.wooripickxxx.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.pickxxx.woori.wooripickxxx.entity.Friend;
import com.pickxxx.woori.wooripickxxx.entity.Member;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.awt.*;
import java.io.Serializable;

@Builder
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class FriendDTO {
    private Long id;
    private String userNickname;
    private String friendNickname;
    private String friendName;
    private String friendPhoneNuber;

    public Friend toEntity() {
        return Friend.builder()
                .userNickname(userNickname)
                .friendNickname(friendNickname)
                .build();
    }

}
