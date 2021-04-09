package com.pickxxx.woori.wooripickxxx.test;

import com.pickxxx.woori.wooripickxxx.domain.User;
import com.pickxxx.woori.wooripickxxx.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class testController {
    public UserRepository userRepository;

    @RequestMapping(value = "/ping", method = RequestMethod.GET)
    @ResponseStatus(value = HttpStatus.OK)
    public String isRunning() {
        userRepository.save(User.builder()
                .email("010-5018-1234")
                .name("TAEHOLEE"));
        return "I'm Alive!";
    }
}
