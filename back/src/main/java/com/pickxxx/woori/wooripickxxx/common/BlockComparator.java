package com.pickxxx.woori.wooripickxxx.common;

import com.pickxxx.woori.wooripickxxx.dto.MemberDTO;
import com.pickxxx.woori.wooripickxxx.entity.Block;

import java.util.Comparator;

public class BlockComparator implements Comparator<Block> {
    @Override
    public int compare(Block a, Block b){
        if(a.getTimeStamp()>b.getTimeStamp()) return -1;
        if(a.getTimeStamp()<b.getTimeStamp()) return 1;
        return 0;
    }
}