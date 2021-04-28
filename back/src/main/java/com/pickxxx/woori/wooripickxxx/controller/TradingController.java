package com.pickxxx.woori.wooripickxxx.controller;

import com.pickxxx.woori.wooripickxxx.common.BuyProduct;
import com.pickxxx.woori.wooripickxxx.common.Response;
import com.pickxxx.woori.wooripickxxx.dto.*;
import com.pickxxx.woori.wooripickxxx.service.TradingService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
@Slf4j
public class TradingController {
    TradingService tradingService;

    //테스트 구매
    @GetMapping("/trading/buy/test")
    public Response<Boolean> testBuyTrade() {
        ArrayList<BuyProduct> buyProducts = new ArrayList<>();

        buyProducts.add(BuyProduct.builder().name("우유").price(1000).number(1).build());
        buyProducts.add(BuyProduct.builder().name("샐러드").price(10000).number(2).build());
        tradingService.createBuy(BuyDTO.builder().userNickname("태호").companyName("하이마트").buyProductList(buyProducts).build());

        return Response.ok(true);
    }

    //빠른 구매처리
    @GetMapping("/trading/buy/fast/{userNickname}/{companyName}/{product}/{price}")
    public Response<Boolean> fastBuy(@PathVariable("userNickname") String userNickname,
                                     @PathVariable("companyName") String companyName,
                                     @PathVariable("product") String product,
                                     @PathVariable("price") Integer price) {
        ArrayList<BuyProduct> buyProducts = new ArrayList<>();

        buyProducts.add(BuyProduct.builder().name(product).price(price).number(1).build());
        tradingService.createBuy(BuyDTO.builder().userNickname(userNickname).companyName(companyName).buyProductList(buyProducts).build());

        return Response.ok(true);
    }

    //기부하기
    @PostMapping("/trading/donation")
    public Response<Boolean> createDonation(@RequestBody DonationDTO donationDTO) {
        return Response.ok(tradingService.createDonation(donationDTO));
    }

    //기부하기 통계
    @GetMapping("/trading/donation/statistics")
    public Response<DonationStatisticsDTO> donationStatistics() {
        return Response.ok(tradingService.donationStatistic());
    }

    //혜택적립내역benefitList
    @GetMapping("/trading/benefits/{userNickname}")
    public Response<ArrayList<TradingLedgerDTO>> donationStatistics(@PathVariable("userNickname") String userNickname) {
        return Response.ok(tradingService.benefitList(userNickname));
    }

}
