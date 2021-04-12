package com.pickxxx.woori.wooripickxxx.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.pickxxx.woori.wooripickxxx.entity.Friend;
import com.pickxxx.woori.wooripickxxx.entity.Member;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.Collection;

@Builder
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class FriendListDTO {
    //private String name;
    //private String nickname;
    //private String phoneNumber;
    private ArrayList<Member> members;

    public int getLength(){
        return members.size();
    }
}
