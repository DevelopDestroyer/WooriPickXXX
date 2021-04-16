package com.pickxxx.woori.wooripickxxx.repository;

import com.pickxxx.woori.wooripickxxx.entity.TradingLedger;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface TradingLedgerRepository extends JpaRepository<TradingLedger, Long> {
    ArrayList<TradingLedger> findAllByDateGreaterThanEqualAndDateLessThanEqualAndTradingTypeEquals(String ago3month, String ago1month, String type);
    ArrayList<TradingLedger> findAllByTradingTypeEquals(String type);
    ArrayList<TradingLedger> findAllByUserNicknameEqualsAndTradingTypeEqualsAndDateGreaterThanEqualAndDateLessThanEqual(String userNickname, String type, String ago3month, String ago1month);
}
