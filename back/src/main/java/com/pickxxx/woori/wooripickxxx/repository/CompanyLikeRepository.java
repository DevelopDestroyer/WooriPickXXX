package com.pickxxx.woori.wooripickxxx.repository;

import com.pickxxx.woori.wooripickxxx.entity.Company;
import com.pickxxx.woori.wooripickxxx.entity.CompanyLike;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.ArrayList;

@Repository
public interface CompanyLikeRepository extends JpaRepository<CompanyLike, Long> {
    //라이크 제거
    @Transactional
    Integer removeByCompanyNameAndUserNickname(String companyName, String userNickname);

    boolean existsByCompanyNameAndUserNickname(String companyName, String userNickname);

    ArrayList<CompanyLike> findAllByCompanyName(String companyName);
}
