package com.pickxxx.woori.wooripickxxx.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Table(name = "BLOCKCHAIN")
@Getter
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Blockchain {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "HASH")
    private String hash;

    @Column(name = "PREVIOUS_HASH")
    private Integer previousHash;

    @Column(name = "DATA")
    private String data;//Transaction

    @Column(name = "TIME_STAMP")
    private long timeStamp;

    @Column(name = "NONCE")
    private int nonce;
}
