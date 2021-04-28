package com.pickxxx.woori.wooripickxxx.service;

import com.pickxxx.woori.wooripickxxx.entity.Block;
import com.pickxxx.woori.wooripickxxx.repository.BlockRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Random;

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
        Block block1 = new Block("우리은행;월드비전;5000000;203;2021-04-30", "0");
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

    public void autoInitBlock(){
        Random rand = new Random();
        String data = "";
        String[] nickNameSet = {
                "참깨라면", "츄파춥스", "리리", "너구리", "초코송이",
                "배방읍보안관", "고향만두", "레쓰비", "오렌지", "기부여신",
                "포댕댕", "데이데이", "웃는사과", "엑스칼리버", "구름",
                "아이스크림사랑", "뿌요뿌요", "마일드", "커피우유", "감자먹장",

                "곰돌이푸우", "맥주와땅콩", "형이다", "라이언", "래빗",
                "타이거", "캣타워", "츄르", "몰티저스", "츠바키문구점",
                "홍삼캔디", "쌍용동보안관", "빈빈", "JS", "민이",
                "주니", "HJ", "사막여우", "비니", "진이",

                "LILOU", "제5원소", "강수석님", "제제", "성HYUN",
                "이슬", "세미", "희희", "구구", "봉봉",
                "윤씨", "알바왕", "주주", "바다의왕문어", "구르미",
                "콩순이", "처루니다", "추억의4인방", "린넨셔츠", "푸름",

                "양재역", "마곡사람", "채연이", "수빈이", "채원이",
                "군대간다", "미미짱", "체로키", "요구르트", "곱창엔소주",
                "꿀고구마", "가즈아", "아메리카노", "안녕", "내추럴와인",
                "노즈", "하하", "무야호", "캔들", "아이스블라스트",

                "친구야", "간짜장곱배기", "부대찌개먹고파", "펑티모", "침사추이",
                "라떼라떼", "비타민C", "푸리린", "세린이", "머슬맨",
                "말을하지그랬어", "퇴근하고싶다", "몽블랑", "크크", "비쥬",
                "피카츄", "파이리", "꼬부기", "대왕슬라임", "별땅",
        };
        for(int i = 0; i < 5000; i++){
            data = "";
            data += nickNameSet[rand.nextInt(nickNameSet.length)] + ";";
            data += "우리핏베네핏 기부;";
            data += "1" + rand.nextInt(100) + "00;";
            data += ( 201 + rand.nextInt(5) ) + ";";
            if(i == 3200){
                data = "우리은행;월드비전;5142000;201;2021-01-31";
            }
            else if(i == 3201){
                data = "우리은행;월드비전;3142000;202;2021-01-31";
            }
            else if(i == 3202){
                data = "우리은행;세이브더칠드런;6234000;203;2021-01-31";
            }
            else if(i == 3203){
                data = "우리은행;장애인복지협회;4234000;204;2021-01-31";
            }
            else if(i == 3204){
                data = "우리은행;유니세프;4342000;205;2021-01-31";
            }
            else if(i == 4995){
                data = "우리은행;월드비전;6312000;201;2021-02-28";
            }
            else if(i == 4996){
                data = "우리은행;월드비전;2441000;202;2021-02-28";
            }
            else if(i == 4997){
                data = "우리은행;세이브더칠드런;4213000;203;2021-02-28";
            }
            else if(i == 4998){
                data = "우리은행;장애인복지협회;3213000;204;2021-02-28";
            }
            else if(i == 4999){
                data = "우리은행;유니세프;5453200;205;2021-02-28";
            }
            else if(i < 300){
                data += "2021-01-01";
            }
            else if (i < 500){
                data += "2021-01-03";
            }
            else if (i < 700){
                data += "2021-01-06";
            }
            else if (i < 900){
                data += "2021-01-08";
            }
            else if (i < 1400){
                data += "2021-01-10";
            }
            else if (i < 1700){
                data += "2021-01-13";
            }
            else if (i < 2000){
                data += "2021-01-15";
            }
            else if (i < 2500){
                data += "2021-01-18";
            }
            else if (i < 2700){
                data += "2021-01-20";
            }
            else if (i < 3000){
                data += "2021-01-24";
            }
            else if (i < 3200){
                data += "2021-01-28";
            }
            else if (i < 3500){
                data += "2021-02-02";
            }
            else if (i < 3800){
                data += "2021-02-03";
            }
            else if (i < 4000){
                data += "2021-02-08";
            }
            else{
                data += "2021-02-11";
            }
            mineBlock(data);



        }
    }


}