package com.pickxxx.woori.wooripickxxx.entity;

import com.pickxxx.woori.wooripickxxx.common.StringUtil;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

public class Block {
    @Getter
    @Setter
    private String hash;
    @Getter
    @Setter
    private String previousHash;
    @Getter
    @Setter
    private String data; //Transaction

    @Getter
    @Setter
    private long timeStamp;
    @Getter
    @Setter
    private int nonce;
    @Getter
    @Setter
    private String target = "00000";
    @Getter
    @Setter
    private int targetDepth = 5;


    public Block(String data,String previousHash ) {
        this.data = makeHashData(data);
        this.data = data;
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