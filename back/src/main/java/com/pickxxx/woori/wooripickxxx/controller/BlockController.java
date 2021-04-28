package com.pickxxx.woori.wooripickxxx.controller;

import com.pickxxx.woori.wooripickxxx.common.BlockComparator;
import com.pickxxx.woori.wooripickxxx.entity.Block;
import com.pickxxx.woori.wooripickxxx.service.BlockService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/blocks")
public class BlockController {

    private final BlockService blockService;

    @GetMapping
    public Collection<Block> findAllBlockChain(){
        if(!blockService.isChainValid()){
            //블록체인 깨진 경우
        }
        ArrayList<Block> list = blockService.findAllBlockChain();
        Collections.sort(list, new BlockComparator());
        return list;
    }


    @PostMapping
    public String mineBlock(@RequestParam(name="data") String data){
        //data : 보낸사람;받는사람;금액;카테고리;시간
        blockService.mineBlock(data);
        return "OK";
    }


}