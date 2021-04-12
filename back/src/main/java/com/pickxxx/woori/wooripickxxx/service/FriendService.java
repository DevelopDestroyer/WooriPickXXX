package com.pickxxx.woori.wooripickxxx.service;

import com.pickxxx.woori.wooripickxxx.dto.FriendDTO;
import com.pickxxx.woori.wooripickxxx.dto.MemberDTO;
import com.pickxxx.woori.wooripickxxx.dto.SignUpDTO;
import com.pickxxx.woori.wooripickxxx.entity.Member;
import com.pickxxx.woori.wooripickxxx.exception.CustomException;
import com.pickxxx.woori.wooripickxxx.repository.FriendRepository;
import com.pickxxx.woori.wooripickxxx.repository.MemberRepository;
import com.pickxxx.woori.wooripickxxx.type.ErrorCode;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Slf4j
@Service
@RequiredArgsConstructor
public class FriendService {
    private final MemberRepository memberRepository;
    private final FriendRepository friendRepository;

    public ArrayList<MemberDTO> selectFriendsInfo(MemberDTO friendsList) {
        //Collection<String> friendPhoneNumbers = new Collection<String>();
        ArrayList<String> friendPhoneNumbers = new ArrayList<>();
        ArrayList<Member> existMembersEntity;
        ArrayList<MemberDTO> existMembersDTO = new ArrayList<>();
        for(int i = 0; i < friendsList.getList().size(); i++){
            friendPhoneNumbers.add(friendsList.getList().get(i).getPhoneNumber());
        }

        //실제 존재하는 멤버 저장
        existMembersEntity = memberRepository.findByPhoneNumberIn(friendPhoneNumbers);
        for(int i = 0; i < existMembersEntity.size(); i++){
            //실제 존재하고 현재 친구가 아닌 리스트 반환
            if(false == friendRepository.existsByUserNicknameAndFriendNickname(friendsList.getNickname(), existMembersEntity.get(i).getNickname())){
                existMembersDTO.add(MemberDTO.builder().name(existMembersEntity.get(i).getName())
                        .nickname(existMembersEntity.get(i).getNickname())
                        .phoneNumber(existMembersEntity.get(i).getPhoneNumber())
                        .build());
            }
        }

        return existMembersDTO;
    }

    public boolean createFriend(FriendDTO friendDTO) {
        //이미 친구인지 확인
        if (friendRepository.existsByUserNicknameAndFriendNickname(friendDTO.getUserNickname(), friendDTO.getFriendNickname())) {
            throw new CustomException(ErrorCode.ALREADY_FRIEND);
        }
        //스스로에게 친구신청인지 확인
        if (friendDTO.getUserNickname().equals(friendDTO.getFriendNickname())){
            throw new CustomException(ErrorCode.DO_NOT_FRIEND_MYSELF);
        }
        //존재하는 사용자 인지 확인(본인)
        if (false == memberRepository.existsByNickname(friendDTO.getUserNickname())){
            throw new CustomException(ErrorCode.USER_NONE);
        }
        //존재하는 사용자 인지 확인(친구)
        if (false == memberRepository.existsByNickname(friendDTO.getFriendNickname())){
            throw new CustomException(ErrorCode.USER_NONE);
        }
        friendRepository.save(friendDTO.toEntity());
        return true;
    }
}
