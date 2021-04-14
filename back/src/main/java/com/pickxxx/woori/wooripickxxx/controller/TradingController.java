package com.pickxxx.woori.wooripickxxx.controller;

import com.pickxxx.woori.wooripickxxx.common.BuyProduct;
import com.pickxxx.woori.wooripickxxx.common.Response;
import com.pickxxx.woori.wooripickxxx.dto.BuyDTO;
import com.pickxxx.woori.wooripickxxx.service.TradingService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
@Slf4j
public class TradingController {
    TradingService tradingService;

    //닉네임 존재유무 체크
    @GetMapping("/trading/buy/test")
    public Response<Boolean> testBuyTrade() {
        BuyDTO buyDTO = null;
        ArrayList<BuyProduct> buyProducts = new ArrayList<>();
        /*
        b1.setName("우유");
        b1.setPrice(1000);
        b1.setNumber(1);
        b2.setName("샐러드");
        b2.setPrice(10000);
        b2.setNumber(1);
         */

        buyProducts.add(BuyProduct.builder().name("우유").price(1000).number(1).build());
        buyProducts.add(BuyProduct.builder().name("샐러드").price(10000).number(2).build());
        tradingService.createBuy(BuyDTO.builder().userNickname("태호").companyName("하이마트").buyProductList(buyProducts).build());
        return Response.ok(true);
    }
}
