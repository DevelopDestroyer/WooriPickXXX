package com.pickxxx.woori.wooripickxxx.repository;

import com.pickxxx.woori.wooripickxxx.dto.FriendListDTO;
import com.pickxxx.woori.wooripickxxx.entity.Friend;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;

import java.awt.print.Pageable;

public interface FriendListRepository extends JpaRepository<Friend, Long> {
    //Page<FriendListMapping> findAllBy(Pageable pageable);
}
