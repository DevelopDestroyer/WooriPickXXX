package com.pickxxx.woori.wooripickxxx.service;

import com.pickxxx.woori.wooripickxxx.domain.User;
import com.pickxxx.woori.wooripickxxx.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class InitService {
/*
    @Autowired
    private UserRepository userRepository;

    public void setTestData() throws IOException {
        List<User> userList = userRepository.saveAll(initUserList());
    }

    private List<User> initUserList() {
        List<User> list = new ArrayList<>();


        list.add(User.builder()
                .name("이태호")
                .phoneNumber("010-5018-1234")
                .build());

        list.add(User.builder()
                .name("성정민")
                .phoneNumber("010-5446-1234")
                .build());

        return list;
    }

 */
}
