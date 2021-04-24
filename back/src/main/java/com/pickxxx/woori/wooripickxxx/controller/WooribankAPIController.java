package com.pickxxx.woori.wooripickxxx.controller;

import com.pickxxx.woori.wooripickxxx.common.BuyProduct;
import com.pickxxx.woori.wooripickxxx.common.Response;
import com.pickxxx.woori.wooripickxxx.common.WooribankAPI;
import com.pickxxx.woori.wooripickxxx.dto.BuyDTO;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
@Slf4j
public class WooribankAPIController {
    @GetMapping("/wooribank/userPhoneNumber/{userPhoneNumber}/accounts")
    public String userAccntInfo(@PathVariable("userPhoneNumber") String userPhoneNumber) throws IOException {
        return WooribankAPI.getAllAccntInfo(userPhoneNumber);
    }

    //테스트 우리은행API
    @PostMapping("/wooribank/test/userAccntInfo")
    public String testUserAccntInfo() {
        return "{\n" +
                "  \"dataHeader\": {},\n" +
                "  \"dataBody\": {\n" +
                "    \"GRID_CNT\": \"6\",\n" +
                "    \"GRID\": [\n" +
                "      {\n" +
                "        \"ACNO\": \"10023898*****\",\n" +  //계좌번호
                "        \"ACCT_KND\": \"P\",\n" +  //계좌구분
                "        \"PRD_NM\": \"WON 통장\",\n" +  //상품명
                "        \"CUCD\": \"KRW\",\n" +
                "        \"PBOK_BAL\": \"2014050.000\",\n" +  //통장잔액
                "        \"FAXC_BAL\": \"0.000\",\n" +
                "        \"NEW_DT\": \"2021-02-18\",\n" +
                "        \"XPR_DT\": \"2022-02-18\",\n" +
                "        \"ADNT_RGS_YN\": \"N\",\n" +
                "        \"PSKL_ACT_YN\": \"Y\",\n" +
                "        \"ACT_STCD\": \"D\"\n" +
                "      },\n" +
                "      {\n" +
                "        \"ACNO\": \"10022821*****\",\n" +
                "        \"ACCT_KND\": \"P\",\n" +
                "        \"PRD_NM\": \"위비모바일통장\",\n" +
                "        \"CUCD\": \"KRW\",\n" +
                "        \"PBOK_BAL\": \"28012200.000\",\n" +
                "        \"FAXC_BAL\": \"0.000\",\n" +
                "        \"NEW_DT\": \"2021-03-10\",\n" +
                "        \"XPR_DT\": \"2022-02-28\",\n" +
                "        \"ADNT_RGS_YN\": \"N\",\n" +
                "        \"PSKL_ACT_YN\": \"N\",\n" +
                "        \"ACT_STCD\": \"A\"\n" +
                "      },\n" +
                "      {\n" +
                "        \"ACNO\": \"10021778*****\",\n" +
                "        \"ACCT_KND\": \"P\",\n" +
                "        \"PRD_NM\": \"스무살우리 통장\",\n" +
                "        \"CUCD\": \"KRW\",\n" +
                "        \"PBOK_BAL\": \"458900.000\",\n" +
                "        \"FAXC_BAL\": \"0.000\",\n" +
                "        \"NEW_DT\": \"2020-04-09\",\n" +
                "        \"XPR_DT\": \"2022-03-10\",\n" +
                "        \"ADNT_RGS_YN\": \"Y\",\n" +
                "        \"PSKL_ACT_YN\": \"N\",\n" +
                "        \"ACT_STCD\": \"D\"\n" +
                "      },\n" +
                "      {\n" +
                "        \"ACNO\": \"10404860*****\",\n" +
                "        \"ACCT_KND\": \"J\",\n" +
                "        \"PRD_NM\": \"우리 Magic6 적금\",\n" +
                "        \"CUCD\": \"KRW\",\n" +
                "        \"PBOK_BAL\": \"360000.000\",\n" +
                "        \"FAXC_BAL\": \"0.000\",\n" +
                "        \"NEW_DT\": \"2020-10-26\",\n" +
                "        \"XPR_DT\": \"2021-10-26\",\n" +
                "        \"ADNT_RGS_YN\": \"N\",\n" +
                "        \"PSKL_ACT_YN\": \"Y\",\n" +
                "        \"ACT_STCD\": \"D\"\n" +
                "      },\n" +
                "      {\n" +
                "        \"ACNO\": \"10730751*****\",\n" +
                "        \"ACCT_KND\": \"U\",\n" +
                "        \"PRD_NM\": \"주택청약종합저축\",\n" +
                "        \"CUCD\": \"KRW\",\n" +
                "        \"PBOK_BAL\": \"6920000.000\",\n" +
                "        \"FAXC_BAL\": \"0.000\",\n" +
                "        \"NEW_DT\": \"2020-10-26\",\n" +
                "        \"XPR_DT\": \"2048-09-09\",\n" +
                "        \"ADNT_RGS_YN\": \"Y\",\n" +
                "        \"PSKL_ACT_YN\": \"N\",\n" +
                "        \"ACT_STCD\": \"A\"\n" +
                "      },\n" +
                "      {\n" +
                "        \"ACNO\": \"120674*******\",\n" +
                "        \"ACCT_KND\": \"L\",\n" +
                "        \"PRD_NM\": \"가계적금관계대출\",\n" +
                "        \"CUCD\": \"KRW\",\n" +
                "        \"PBOK_BAL\": \"0000000.000\",\n" +
                "        \"FAXC_BAL\": \"0.000\",\n" +
                "        \"NEW_DT\": \"2021-04-04\",\n" +
                "        \"XPR_DT\": \"2021-06-23\",\n" +
                "        \"ADNT_RGS_YN\": \"\",\n" +
                "        \"PSKL_ACT_YN\": \"N\",\n" +
                "        \"ACT_STCD\": \"D\"\n" +
                "      }\n" +
                "    ]\n" +
                "  }\n" +
                "}";
    }

    @GetMapping("/wooribank/userAccountNumber/{userAccountNumber}/tranList")
    public String userTransList(@PathVariable("userAccountNumber") String userAccountNumber) throws IOException {
        return WooribankAPI.getTransCustomerList(userAccountNumber);
    }

    //테스트 우리은행API
    @PostMapping("/wooribank/test/userTransList")
    public String testUserTransList() {
        return "{\n" +
                "  \"dataHeader\": {},\n" +
                "  \"dataBody\": {\n" +
                "    \"GRID_CNT\": \"3\",\n" +
                "    \"GRID\": [\n" +
                "      {\n" +
                "        \"TRN_DT\": \"2021-04-21\",\n" +
                "        \"TRN_TM\": \"121322\",\n" +
                "        \"TRN_SRNO\": \"4\",\n" +
                "        \"CUCD\": \"KRW\",\n" +
                "        \"PBOK_PRNG_OTLN_CD\": \"0318\",\n" +
                "        \"DPS_RAP_KDCD\": \"200\",\n" +
                "        \"MD_KDCD\": \"MIBMPSB2\",\n" +
                "        \"RCV_AM\": \"0.000\",\n" +  //입금금액
                "        \"PAY_AM\": \"384000.000\",\n" +  //출금금액
                "        \"DPS_BAL\": \"277400000.000\",\n" +
                "        \"TRN_TXT\": \"스타벅스\",\n" +  //거래메모
                "        \"PID_SQ\": \"0\",\n" +
                "        \"TRN_STCD\": \"600500000.000\"\n" +
                "      },\n" +
                "      {\n" +
                "        \"TRN_DT\": \"2021-04-17\",\n" +
                "        \"TRN_TM\": \"081050\",\n" +
                "        \"TRN_SRNO\": \"6\",\n" +
                "        \"CUCD\": \"KRW\",\n" +
                "        \"PBOK_PRNG_OTLN_CD\": \"0318\",\n" +
                "        \"DPS_RAP_KDCD\": \"200\",\n" +
                "        \"MD_KDCD\": \"MIBMPSB2\",\n" +
                "        \"RCV_AM\": \"910000.000\",\n" +
                "        \"PAY_AM\": \"0.000\",\n" +
                "        \"DPS_BAL\": \"862300000.000\",\n" +
                "        \"TRN_TXT\": \"CGV\",\n" +
                "        \"PID_SQ\": \"0\",\n" +
                "        \"TRN_STCD\": \"025400000.000\"\n" +
                "      },\n" +
                "      {\n" +
                "        \"TRN_DT\": \"2021-03-25\",\n" +
                "        \"TRN_TM\": \"174257\",\n" +
                "        \"TRN_SRNO\": \"8\",\n" +
                "        \"CUCD\": \"KRW\",\n" +
                "        \"PBOK_PRNG_OTLN_CD\": \"0318\",\n" +
                "        \"DPS_RAP_KDCD\": \"100\",\n" +
                "        \"MD_KDCD\": \"MIBMPSB2\",\n" +
                "        \"RCV_AM\": \"0.000\",\n" +
                "        \"PAY_AM\": \"471000.000\",\n" +
                "        \"DPS_BAL\": \"178500000.000\",\n" +
                "        \"TRN_TXT\": \"CGV\",\n" +
                "        \"PID_SQ\": \"0\",\n" +
                "        \"TRN_STCD\": \"901800000.000\"\n" +
                "      }\n" +
                "    ]\n" +
                "  }\n" +
                "}";
    }
}
