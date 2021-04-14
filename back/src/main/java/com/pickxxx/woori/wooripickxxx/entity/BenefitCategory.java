package com.pickxxx.woori.wooripickxxx.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Table(name = "BENEFIT_CATEGORY")
@Getter
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class BenefitCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "USER_NICKNAME")
    private String userNickname;

    @Column(name = "CATEGORY_ID")
    private Integer categoryId;
}
