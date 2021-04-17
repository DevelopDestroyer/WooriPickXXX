package com.pickxxx.woori.wooripickxxx.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Table(name = "COMPANY_LIKE")
@Getter
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class CompanyLike {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "COMPANY_NAME")
    private String companyName;

    @Column(name = "USER_NICKNAME")
    private String userNickname;
}
