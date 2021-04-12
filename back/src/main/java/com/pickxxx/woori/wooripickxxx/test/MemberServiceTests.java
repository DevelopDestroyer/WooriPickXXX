package com.pickxxx.woori.wooripickxxx.test;

import com.pickxxx.woori.wooripickxxx.dto.MemberDTO;
import com.pickxxx.woori.wooripickxxx.dto.SignUpDTO;
import com.pickxxx.woori.wooripickxxx.entity.Member;
import com.pickxxx.woori.wooripickxxx.repository.MemberRepository;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
@Rollback(false)
public class MemberServiceTests {

    @Autowired
    private MemberRepository memberRepository;

    @Test
    public void saveMemberTest() {

        //given
        SignUpDTO signUpDTO = new SignUpDTO();
        signUpDTO.setName("고은지");
        signUpDTO.setPhoneNumber("010-9999-8888");
        signUpDTO.setNickname("나이키");
        signUpDTO.setPoint(0);
        signUpDTO.setAccountNumber("9999101029293838");

        memberRepository.save(signUpDTO.toEntity());

        // whenfindBy
        Member retrivedMember = memberRepository.findByPhoneNumber(signUpDTO.getPhoneNumber());

        // then
        Assert.assertEquals(retrivedMember.getName(), "고은지");
        Assert.assertEquals(retrivedMember.getPhoneNumber(), "010-9999-8888");
    }
}