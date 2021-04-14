package com.pickxxx.woori.wooripickxxx.repository;

import com.pickxxx.woori.wooripickxxx.dto.MemberDTO;
import com.pickxxx.woori.wooripickxxx.dto.SignUpDTO;
import com.pickxxx.woori.wooripickxxx.entity.Member;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Collection;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {

    boolean existsByNickname(String nickname);

    Member findByPhoneNumber(String phoneNumber);

    ArrayList<Member> findByPhoneNumberIn(ArrayList<String> phoneNumbers);

    Member findByNickname(String nick);

    @Transactional
    @Modifying(clearAutomatically = true)
    @Query("UPDATE Member m set m.accountMoney = ?2, m.point = ?3 where m.nickname = ?1")
    int updateAccountMoneyAndPoint(@Param("usrNickname") String usrNickname, @Param("usrAccountMoney") Integer usrAccountMoney, @Param("usrPoint") Integer usrPoint);
}