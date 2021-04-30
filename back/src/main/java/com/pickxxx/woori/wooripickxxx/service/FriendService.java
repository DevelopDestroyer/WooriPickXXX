package com.pickxxx.woori.wooripickxxx.service;

import com.pickxxx.woori.wooripickxxx.common.FriendComparator;
import com.pickxxx.woori.wooripickxxx.common.TimeCalcul;
import com.pickxxx.woori.wooripickxxx.dto.FriendDTO;
import com.pickxxx.woori.wooripickxxx.dto.MemberDTO;
import com.pickxxx.woori.wooripickxxx.dto.SignUpDTO;
import com.pickxxx.woori.wooripickxxx.entity.Friend;
import com.pickxxx.woori.wooripickxxx.entity.Member;
import com.pickxxx.woori.wooripickxxx.entity.TradingLedger;
import com.pickxxx.woori.wooripickxxx.exception.CustomException;
import com.pickxxx.woori.wooripickxxx.repository.FriendRepository;
import com.pickxxx.woori.wooripickxxx.repository.MemberRepository;
import com.pickxxx.woori.wooripickxxx.repository.TradingLedgerRepository;
import com.pickxxx.woori.wooripickxxx.type.ErrorCode;
import com.pickxxx.woori.wooripickxxx.type.TradingLedgerType;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;

@Slf4j
@Service
@RequiredArgsConstructor
public class FriendService {
    private final MemberRepository memberRepository;
    private final FriendRepository friendRepository;
    private final TradingLedgerRepository tradingLedgerRepository;
    TimeCalcul time = new TimeCalcul();

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

    public ArrayList<FriendDTO> getPointRank(String userNickname){
        ArrayList<Friend> friends = friendRepository.findByUserNickname(userNickname);
        friends.add(Friend.builder().userNickname(userNickname).friendNickname(userNickname).build());//본인도 추가

        ArrayList<FriendDTO> pointList = new ArrayList<>();

        for(int i = 0; i < friends.size(); i++){
            ArrayList<TradingLedger> allUserBenefitTrading = new ArrayList<>();
            Integer pointTotal = 0;
            allUserBenefitTrading = tradingLedgerRepository.findAllByUserNicknameEqualsAndTradingTypeEqualsAndDateGreaterThanEqualAndDateLessThanEqual(friends.get(i).getFriendNickname(), TradingLedgerType.BENEFIT.getTradingLedgerTypeName(), time.thisMonthStart(), time.thisMonthEnd());
            for(int j = 0; j < allUserBenefitTrading.size(); j++){
                pointTotal += allUserBenefitTrading.get(j).getPoint();
            }
            pointList.add(FriendDTO.builder().friendNickname(friends.get(i).getFriendNickname()).friendPoint(pointTotal).build());
        }

        //높은 순서로 정렬
        Collections.sort(pointList, new FriendComparator());

/*
        //친구리스트 가져오기
        ArrayList<Friend> userFriendList = friendRepository.findByUserNickname(userNickname);
        ArrayList<FriendDTO> pointList = new ArrayList<>();
        //친구닉네임 및 친구포인트 가져오기
        for(int i = 0; i < userFriendList.size(); i++){
            pointList.add(FriendDTO.builder()
                    .friendNickname(userFriendList.get(i).getFriendNickname())
                    .friendPoint(memberRepository.findByNickname(userFriendList.get(i).getFriendNickname()).getPoint())
                    .build());
        }
        //내 포인트 추가하기
        pointList.add(FriendDTO.builder()
                .friendNickname(userNickname)
                .friendPoint(memberRepository.findByNickname(userNickname).getPoint())
                .build());

        //높은 순서로 정렬
        Collections.sort(pointList, new FriendComparator());
*/
        return pointList;
    }
}
