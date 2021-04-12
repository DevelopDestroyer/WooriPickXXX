package com.pickxxx.woori.wooripickxxx.repository;

import com.pickxxx.woori.wooripickxxx.entity.Friend;
import com.pickxxx.woori.wooripickxxx.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface FriendRepository extends JpaRepository<Friend, Long> {
    //친구 제거
    boolean deleteByUserNicknameAndFriendNickname(String userNickname, String friendNickname);

    //이미 친구로 등록되어있는지 확인
    boolean existsByUserNicknameAndFriendNickname(String userNickname, String friendNickname);

    //사용자의 친구들 가져오기
    ArrayList<Friend> findByUserNickname(String userNickname);
}
