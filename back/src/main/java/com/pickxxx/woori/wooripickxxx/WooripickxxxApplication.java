package com.pickxxx.woori.wooripickxxx;

import com.pickxxx.woori.wooripickxxx.service.BlockService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@RequiredArgsConstructor
public class WooripickxxxApplication {

    private final BlockService blockService;

    public static void main(String[] args) {
        SpringApplication.run(WooripickxxxApplication.class, args);
    }

    @Bean
    public ApplicationRunner applicationRunner() {
        return new ApplicationRunner() {
            @Override
            public void run(ApplicationArguments args) throws Exception {

                // 블록체인 초기화
                blockService.initBlock();
                blockService.autoInitBlock();
            }
        };
    }

}
