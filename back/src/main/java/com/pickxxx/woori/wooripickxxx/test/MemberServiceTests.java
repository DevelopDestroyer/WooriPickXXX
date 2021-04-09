package com.pickxxx.woori.wooripickxxx.test;

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
        Member member = new Member();
        member.setName("andrew");
        member.setAge(32);
        memberRepository.save(member);

        // when
        Member retrivedMember = memberRepository.findById(member.getId()).get();

        // then
        Assert.assertEquals(retrivedMember.getName(), "andrew");
        Assert.assertEquals(retrivedMember.getAge(), Integer.valueOf(32));
    }
}