package com.pickxxx.woori.wooripickxxx.exception;

import com.pickxxx.woori.wooripickxxx.type.ErrorCode;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class CustomException extends RuntimeException {
    private final ErrorCode errorCode;
}
