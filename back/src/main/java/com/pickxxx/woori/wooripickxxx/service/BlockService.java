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

    public void initBlock(){
        Block block1 = new Block("우리은행;월드비전;5000000;아동 - 노인;2021-04-30", "0");
        block1.setHash("000006fc615cfe3026da94ab8d9b0e988a425385bf65cd8a18392b63fd7948a1");
        block1.setTimeStamp(1619242137296L);
        block1.setNonce(1285662);
        block1.setTarget("00000");
        block1.setTargetDepth(5);
        findAllBlockChain().add(block1);

        Block block2 = new Block("리리;우리핏베네핏 기부;3000;201;2021-04-30", "000006fc615cfe3026da94ab8d9b0e988a425385bf65cd8a18392b63fd7948a1");
        block2.setHash("000001576ca15a729644e0ddcb11b5d728f6364174d26990512cfb752aafae54");
        block2.setTimeStamp(1619242307746L);
        block2.setNonce(603972);
        block2.setTarget("00000");
        block2.setTargetDepth(5);
        findAllBlockChain().add(block2);

        Block block3 = new Block("너구리;우리핏베네핏 기부;3000;202;2021-04-30", "000001576ca15a729644e0ddcb11b5d728f6364174d26990512cfb752aafae54");
        block3.setHash("000006fc615cfe3026da94ab8d9b0e988a425385bf65cd8a18392b63fd7948a1");
        block3.setTimeStamp(1619242336119L);
        block3.setNonce(149987);
        block3.setTarget("00000");
        block3.setTargetDepth(5);
        findAllBlockChain().add(block3);

        Block block4 = new Block("초코송이;우리핏베네핏 기부;15000;205;2021-04-30", "00000b599e2ed34deffd4c0c7f5d96268c8ec991a86196da171027b242019d42");
        block4.setHash("00000d44b63888e5dfa89124811ed46333f95fb8f3e5f2e593ccecf59ee55d02");
        block4.setTimeStamp(1619242385201L);
        block4.setNonce(1285662);
        block4.setTarget("00000");
        block4.setTargetDepth(5);
        findAllBlockChain().add(block4);
    }

}