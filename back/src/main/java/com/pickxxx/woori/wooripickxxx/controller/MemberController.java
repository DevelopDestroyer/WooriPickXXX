package com.pickxxx.woori.wooripickxxx.controller;

import com.pickxxx.woori.wooripickxxx.common.Response;
import com.pickxxx.woori.wooripickxxx.dto.BenefitCategoryDTO;
import com.pickxxx.woori.wooripickxxx.dto.MemberDTO;
import com.pickxxx.woori.wooripickxxx.dto.SignUpDTO;
import com.pickxxx.woori.wooripickxxx.service.MemberService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
@Slf4j
public class MemberController {
    private final MemberService memberService;

    //멤버 가입
    @PostMapping("/members")
    public Response<MemberDTO> createUser(@RequestBody SignUpDTO signUpDTO) {
        return Response.ok(memberService.createMember(signUpDTO));
    }

    //닉네임 존재유무 체크
    @GetMapping("/members/nicknameCheck/{nickname}")
    public Response<Boolean> existNicknameCheck(@PathVariable("nickname") String nickname) {
        return Response.ok(memberService.isExistUserByNickname(nickname));
    }

    //카테고리 추가
    @PostMapping("/members/category")
    public Response<Boolean> createCategories(@RequestBody BenefitCategoryDTO benefitCategoryDTO) {
        return Response.ok(memberService.createBenefitCategories(benefitCategoryDTO));
    }

}
