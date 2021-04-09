package com.pickxxx.woori.wooripickxxx.domain;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "USER_MST")
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {
    //@Id
    //@GeneratedValue(strategy = GenerationType.AUTO)
    //private Long userId;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long userId;

    @Setter
    @Column(name = "name")
    public String name;

    @Setter
    @Column(name = "phone_number")
    public String phoneNumber;

}
