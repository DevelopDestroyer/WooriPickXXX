package com.pickxxx.woori.wooripickxxx.controller;

import com.pickxxx.woori.wooripickxxx.common.Response;
import com.pickxxx.woori.wooripickxxx.dto.FriendDTO;
import com.pickxxx.woori.wooripickxxx.dto.FriendListDTO;
import com.pickxxx.woori.wooripickxxx.dto.MemberDTO;
import com.pickxxx.woori.wooripickxxx.dto.SignUpDTO;
import com.pickxxx.woori.wooripickxxx.service.FriendService;
import com.pickxxx.woori.wooripickxxx.service.MemberService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
@Slf4j
public class FriendController {
    private final FriendService friendService;

    //전화번호 기반 유효 친구 검색
    @GetMapping("/friends")
    public Response<ArrayList<MemberDTO>> createUser(@RequestBody MemberDTO friendList) {
        return Response.ok(friendService.selectFriendsInfo(friendList));
    }

    @PostMapping("/friend")
    public Response<Boolean> createUser(@RequestBody FriendDTO friendDTO) {
        return Response.ok(friendService.createFriend(friendDTO));
    }


}
