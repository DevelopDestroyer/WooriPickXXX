package com.pickxxx.woori.wooripickxxx.entity;

import com.pickxxx.woori.wooripickxxx.common.StringUtil;
import lombok.Getter;

import java.util.Date;

public class Block {
    @Getter
    private String hash;
    @Getter
    private String previousHash;
    @Getter
    private String data; //Transaction

    @Getter
    private long timeStamp;
    @Getter
    private int nonce;
    @Getter
    private String target = "00000";
    @Getter
    private int targetDepth = 5;


    public Block(String data,String previousHash ) {
        this.data = makeHashData(data);
        this.previousHash = previousHash;
        this.timeStamp = new Date().getTime();
        mineNewBlock();
    }


    /**
     * 신규 블록체인을 생성한다.
     */
    private void mineNewBlock(){
        // 조건에 맞는 Hash 값을 찾을 때까지 계속 반복한다.
        while(hash == null || !hash.substring(0, targetDepth).equals(target)) {
            nonce ++;
            hash = makeHashBlock();
        }
    }

    /**
     * Hash 값을 조회한다.
     */
    public String makeHashBlock() {

        return StringUtil.getSha256(
                previousHash +
                        Long.toString(timeStamp) +
                        data +
                        Integer.toString(nonce)
        );
    }

    /**
     * 트랜잭션 데이터를 해싱처리한다.
     */
    public String makeHashData(String data) {
        return StringUtil.getSha256(data);
    }
}