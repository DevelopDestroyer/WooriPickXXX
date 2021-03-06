package com.pickxxx.woori.wooripickxxx.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Table(name = "TRADING_LEDGER")
@Getter
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class TradingLedger {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "USER_NICKNAME")
    private String userNickname;

    @Column(name = "TRADING_TYPE")
    private String tradingType; //BENEFIT : 혜택으로 인한 포인트 생성, DONATION : 기부, WITHDRAW : 계좌로 인출

    @Column(name = "COMPANY_NAME")
    private String companyName; //BENEFIT : 혜택으로 인한 포인트 생성, DONATION : 기부, WITHDRAW : 계좌로 인출

    @Column(name = "CATEGORY_ID")
    private Integer categoryId; //BENEFIT : 혜택으로 인한 포인트 생성, DONATION : 기부, WITHDRAW : 계좌로 인출

    @Column(name = "TOTAL_BUY_PRICE")
    private Integer totalBuyPrice; //BENEFIT : 혜택으로 인한 포인트 생성, DONATION : 기부, WITHDRAW : 계좌로 인출

    @Column(name = "POINT")
    private Integer point; //증감된 포인트

    @Column(name = "DATE")
    private String date; //날짜

}
