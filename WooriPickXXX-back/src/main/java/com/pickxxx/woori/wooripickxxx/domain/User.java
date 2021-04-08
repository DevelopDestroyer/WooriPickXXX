package com.pickxxx.woori.wooripickxxx.domain;

import lombok.*;

import javax.annotation.Resource;
import javax.persistence.*;

@Entity
@Data
@Table(name = "USERS")
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "phone_number")
    private String phoneNumber;

}
