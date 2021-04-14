package com.pickxxx.woori.wooripickxxx.repository;

import com.pickxxx.woori.wooripickxxx.entity.BenefitCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.ArrayList;

@Repository
public interface BenefitCategoryRepository extends JpaRepository<BenefitCategory, Long> {
    //특정 유저의 카테고리 검색
    ArrayList<BenefitCategory> getBenefitCategoriesByUserNickname(String userNickname);

    //카테고리 제거
    @Transactional
    Integer removeByUserNickname(String userNickname);
}
