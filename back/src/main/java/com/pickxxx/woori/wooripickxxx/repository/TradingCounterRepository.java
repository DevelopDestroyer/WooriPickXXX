package com.pickxxx.woori.wooripickxxx.repository;

import com.pickxxx.woori.wooripickxxx.entity.Member;
import com.pickxxx.woori.wooripickxxx.entity.TradingCounter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.ArrayList;

public interface TradingCounterRepository extends JpaRepository<TradingCounter, Long> {
    ArrayList<TradingCounter> findByUserNickname(String nickname);
    ArrayList<TradingCounter> findByUserNicknameAndCompanyName(String nickname, String CompanyName);

    @Transactional
    @Modifying(clearAutomatically = true)
    @Query("UPDATE TradingCounter m set m.cnt = ?1 where m.userNickname = ?2 and m.companyName = ?3")
    int updateCnt(@Param("cnt") Integer cnt, @Param("userNickname") String userNickname, @Param("companyName") String companyName);
}
