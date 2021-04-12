package com.pickxxx.woori.wooripickxxx.repository;

import com.pickxxx.woori.wooripickxxx.dto.MemberDTO;
import com.pickxxx.woori.wooripickxxx.dto.SignUpDTO;
import com.pickxxx.woori.wooripickxxx.entity.Member;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Collection;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {

    boolean existsByNickname(String nickname);

    Member findByPhoneNumber(String phoneNumber);

    ArrayList<Member> findByPhoneNumberIn(ArrayList<String> phoneNumbers);

    Member findByNickname(String nick);
}