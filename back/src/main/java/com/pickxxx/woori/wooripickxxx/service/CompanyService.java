package com.pickxxx.woori.wooripickxxx.service;

import com.pickxxx.woori.wooripickxxx.dto.CompanyDTO;
import com.pickxxx.woori.wooripickxxx.dto.CompanyLikeDTO;
import com.pickxxx.woori.wooripickxxx.entity.Company;
import com.pickxxx.woori.wooripickxxx.entity.CompanyLike;
import com.pickxxx.woori.wooripickxxx.exception.CustomException;
import com.pickxxx.woori.wooripickxxx.repository.CompanyLikeRepository;
import com.pickxxx.woori.wooripickxxx.repository.CompanyRepository;
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
public class CompanyService {
    private final CompanyRepository companyRepository;
    private final CompanyLikeRepository companyLikeRepository;

    public ArrayList<CompanyDTO> companyList(String userNickname){
        ArrayList<Company> companyList = new ArrayList<>();
        ArrayList<CompanyDTO> companyDTOS = new ArrayList<>();

        companyList = companyRepository.findAll();
        for(int i = 0; i < companyList.size(); i++){
            companyDTOS.add(CompanyDTO.builder()
                    .companyName(companyList.get(i).getCompanyName())
                    .categoryId(companyList.get(i).getCategoryId())
                    .description(companyList.get(i).getDescription())
                    .thumbNailPath(companyList.get(i).getThumbNailPath())
                    .userLike(companyLikeRepository.existsByCompanyNameAndUserNickname(companyList.get(i).getCompanyName(), userNickname))
                    .totalLike(companyLikeRepository.findAllByCompanyName(companyList.get(i).getCompanyName()).size())
                    .build());
        }
        return companyDTOS;
    }

    public boolean createCompanyLike(CompanyLikeDTO companyLikeDTO) {
        if(true == companyLikeRepository.existsByCompanyNameAndUserNickname(companyLikeDTO.getCompanyName(), companyLikeDTO.getUserNickname())){
            throw new CustomException(ErrorCode.ALREADY_LIKE);
        }

        companyLikeRepository.save(CompanyLike.builder()
                .companyName(companyLikeDTO.getCompanyName())
                .userNickname(companyLikeDTO.getUserNickname())
                .build());
        return true;
    }

    public boolean deleteCompanyLike(CompanyLikeDTO companyLikeDTO){
        companyLikeRepository.removeByCompanyNameAndUserNickname(companyLikeDTO.getCompanyName(), companyLikeDTO.getUserNickname());
        return true;
    }
}
