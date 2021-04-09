package com.pickxxx.woori.wooripickxxx.entity;

import lombok.Data;

import javax.persistence.*;


@Table(name = "MEMBER")
@Data
@Entity
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "NAME")
    private String name;

    @Column(name = "AGE")
    private Integer age;

}