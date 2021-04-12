package com.pickxxx.woori.wooripickxxx.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Table(name = "FRIEND")
@Getter
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Friend {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "USER_NICKNAME")
    private String userNickname;

    @Column(name = "FRIEND_NICKNAME")
    private String friendNickname;
}
