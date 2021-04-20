package com.pickxxx.woori.wooripickxxx.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Table(name = "TRADING_COUNTER")
@Getter
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class TradingCounter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "USER_NICKNAME")
    private String userNickname;

    @Column(name = "COMPANY_NAME")
    private String companyName;

    @Column(name = "CNT")
    private Integer cnt;
}
