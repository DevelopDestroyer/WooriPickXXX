package com.pickxxx.woori.wooripickxxx;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
//@EntityScan( basePackages = {"com.pickxxx.woori.wooripickxxx.domain"} )
public class WooriPickXxxApplication {

    public static void main(String[] args) {
        SpringApplication.run(WooriPickXxxApplication.class, args);
    }

}
