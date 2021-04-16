package com.pickxxx.woori.wooripickxxx.controller;

import com.pickxxx.woori.wooripickxxx.common.Response;
import com.pickxxx.woori.wooripickxxx.dto.CompanyDTO;
import com.pickxxx.woori.wooripickxxx.dto.CompanyLikeDTO;
import com.pickxxx.woori.wooripickxxx.dto.FriendDTO;
import com.pickxxx.woori.wooripickxxx.dto.MemberDTO;
import com.pickxxx.woori.wooripickxxx.service.CompanyService;
import com.pickxxx.woori.wooripickxxx.service.FriendService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
@Slf4j
public class CompanyController {
    private final CompanyService companyService;

    //회사 리스트 조회 및 나의 좋아요 여부
    @GetMapping("/{userNickname}/company")
    public Response<ArrayList<CompanyDTO>> companyList(@PathVariable("userNickname") String userNickname) {
        return Response.ok(companyService.companyList(userNickname));
    }

    //좋아요 등록
    @PostMapping("/company/like")
    public Response<Boolean> createLike(@RequestBody CompanyLikeDTO companyLikeDTO) {
        return Response.ok(companyService.createCompanyLike(companyLikeDTO));
    }

    //좋아요 취소
    @DeleteMapping("/company/like")
    public Response<Boolean> deleteLike(@RequestBody CompanyLikeDTO companyLikeDTO) {
        return Response.ok(companyService.deleteCompanyLike(companyLikeDTO));
    }





}
