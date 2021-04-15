package com.pickxxx.woori.wooripickxxx.entity;

import lombok.*;

import javax.persistence.*;


@Table(name = "MEMBER")
@Getter
@Setter
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "NAME")
    private String name;

    @Column(name = "NICKNAME")
    private String nickname;

    @Column(name = "PASSWORD")
    private String password;

    @Column(name = "POINT")
    private Integer point;

    @Column(name = "ACCOUNT_NUMBER")
    private String accountNumber;

    @Column(name = "ACCOUNT_MONEY")
    private Integer accountMoney;

    @Column(name = "PHONE_NUMBER")
    private String phoneNumber;

}