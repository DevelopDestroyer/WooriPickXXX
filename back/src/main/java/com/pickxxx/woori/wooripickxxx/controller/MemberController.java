package com.pickxxx.woori.wooripickxxx.controller;

import com.pickxxx.woori.wooripickxxx.common.Response;
import com.pickxxx.woori.wooripickxxx.dto.BenefitCategoryDTO;
import com.pickxxx.woori.wooripickxxx.dto.MemberDTO;
import com.pickxxx.woori.wooripickxxx.dto.SignUpDTO;
import com.pickxxx.woori.wooripickxxx.dto.TogetherDTO;
import com.pickxxx.woori.wooripickxxx.service.MemberService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.ArrayList;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
@Slf4j
public class MemberController {
    private final MemberService memberService;

    //멤버 가입
    @PostMapping("/members")
    public Response<MemberDTO> createUser(@RequestBody SignUpDTO signUpDTO) throws IOException {
        return Response.ok(memberService.createMember(signUpDTO));
    }

    //내 정보 가져오기
    @GetMapping("/members/{nickname}")
    public Response<MemberDTO> getMyInfo(@PathVariable("nickname") String nickname) {
        return Response.ok(memberService.getMyInfo(nickname));
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

    //나의 카테고리 정보 조회
    @GetMapping("/members/{nickname}/category")
    public Response<ArrayList<BenefitCategoryDTO>> getUserBenefitCatefories(@PathVariable("nickname") String nickname) {
        return Response.ok(memberService.getUserBenefitCatefories(nickname));
    }

    //나의 카테고리 정보 조회
    @GetMapping("/members/{nickname}/together")
    public Response<TogetherDTO> together(@PathVariable("nickname") String nickname) {
        return Response.ok(memberService.together(nickname));
    }

    //카테고리 추천 테스트
    @GetMapping("/members/category/recommend/test")
    public Response<Boolean> recommendTest() {
        memberService.recommendTest();
        return Response.ok(true);
    }

    //나의 카테고리 추천
    @GetMapping("/members/{nickname}/category/recommend")
    public Response<ArrayList<BenefitCategoryDTO>> recommendCategories(@PathVariable("nickname") String nickname) {
        return Response.ok(memberService.recommendCategories(nickname));
    }



}
