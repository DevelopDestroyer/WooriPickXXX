package com.pickxxx.woori.wooripickxxx.controller;

import com.pickxxx.woori.wooripickxxx.entity.Block;
import com.pickxxx.woori.wooripickxxx.service.BlockService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequiredArgsConstructor
@RequestMapping("/blocks")
public class BlockController {

    private final BlockService blockService;

    @GetMapping
    public Collection<Block> findAllBlockChain(){
        if(!blockService.isChainValid()){
            //블록체인 깨진 경우
        }
        return blockService.findAllBlockChain();
    }


    @PostMapping
    public String mineBlock(@RequestParam(name="data") String data){
        blockService.mineBlock(data);
        return "OK";
    }


}