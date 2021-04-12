package com.pickxxx.woori.wooripickxxx.common;

import com.pickxxx.woori.wooripickxxx.dto.FriendDTO;

import java.util.Comparator;

public class FriendComparator implements Comparator<FriendDTO> {
    @Override
    public int compare(FriendDTO a,FriendDTO b){
        if(a.getFriendPoint()>b.getFriendPoint()) return -1;
        if(a.getFriendPoint()<b.getFriendPoint()) return 1;
        return 0;
    }
}