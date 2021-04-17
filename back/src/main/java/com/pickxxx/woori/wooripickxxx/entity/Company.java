package com.pickxxx.woori.wooripickxxx.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Table(name = "COMPANY")
@Getter
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "COMPANY_NAME")
    private String companyName;

    @Column(name = "CATEGORY_ID")
    private Integer categoryId;

    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name = "THUMB_NAIL_PATH")
    private String thumbNailPath;
}
