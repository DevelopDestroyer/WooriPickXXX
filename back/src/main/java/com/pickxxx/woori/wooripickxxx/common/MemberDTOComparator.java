package com.pickxxx.woori.wooripickxxx.common;

import com.pickxxx.woori.wooripickxxx.dto.MemberDTO;

import java.util.Comparator;

public class MemberDTOComparator implements Comparator<MemberDTO> {
    @Override
    public int compare(MemberDTO a, MemberDTO b){
        if(a.getPoint()>b.getPoint()) return -1;
        if(a.getPoint()<b.getPoint()) return 1;
        return 0;
    }
}