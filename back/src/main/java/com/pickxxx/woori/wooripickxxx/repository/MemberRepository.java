package com.pickxxx.woori.wooripickxxx.repository;

import com.pickxxx.woori.wooripickxxx.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {

}