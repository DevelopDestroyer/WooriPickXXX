package com.pickxxx.woori.wooripickxxx.service;

import com.pickxxx.woori.wooripickxxx.entity.Block;
import com.pickxxx.woori.wooripickxxx.repository.BlockRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
@RequiredArgsConstructor
public class BlockService {

    private final BlockRepository blockRepository;

    public ArrayList<Block> findAllBlockChain(){
        return blockRepository.findAllBlockChain();
    }

    public void mineBlock(String data){
        String previousHash = findAllBlockChain().isEmpty()? "0" : findAllBlockChain().get(findAllBlockChain().size() - 1).getHash();
        findAllBlockChain().add(new Block(data, previousHash));
    }

    public Boolean isChainValid() {
        Block currentBlock;
        Block previousBlock;

        ArrayList<Block> blockChain = findAllBlockChain();

        for(int i=1; i < blockChain.size(); i++) {
            currentBlock = blockChain.get(i);
            previousBlock = blockChain.get(i-1);

            // hash값이 옳은지 확인
            if(!currentBlock.getHash().equals(currentBlock.makeHashBlock()) ){
                return false;
            }

            // 이 전 블록과의 연결이 유효한지 확인
            if(!previousBlock.getHash().equals(currentBlock.getPreviousHash()) ) {
                return false;
            }
        }
        return true;
    }

}