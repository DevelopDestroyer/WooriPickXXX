package com.pickxxx.woori.wooripickxxx.repository;

import com.pickxxx.woori.wooripickxxx.entity.BenefitCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface BenefitCategoryRepository extends JpaRepository<BenefitCategory, Long> {
    //카테고리 제거
    @Transactional
    Integer removeByUserNickname(String userNickname);
}
