package com.pickxxx.woori.wooripickxxx.repository;

import com.pickxxx.woori.wooripickxxx.entity.Member;
import com.pickxxx.woori.wooripickxxx.entity.TradingCounter;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.ArrayList;

public interface TradingCounterRepository extends JpaRepository<TradingCounter, Long> {
    ArrayList<TradingCounter> findByUserNickname(String nickname);
}
