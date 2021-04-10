package com.pickxxx.woori.wooripickxxx.type;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@ToString
@Getter
@AllArgsConstructor
public enum ErrorCode {
    // COMMON
    NOT_DEFINED("A001", "정의 되지 않은 에러입니다."),
    NULL_POINT("A002", "null point 에러 입니다."),

    // USER
    USER_NONE("U001", "존재하지 않는 사용자입니다."),
    LOGIN_INPUT_INVALID("U002", "전화번호, 성함, 비밀번호를 확인해주세요."),
    PHONENUMBER_DUPLICATION("U003", "동일한 전화번호의 사용자가 존재합니다."),

    // PRODUCT
    NOT_EXIST_PRODUCT("P001", "해당 상품은 존재하지 않습니다."),

    // RETAIL_PRODUCT
    NOT_EXIST_RETAIL_PRODUCT("R001", "해당 소매상품은 존재하지 않습니다."),

    // IMAGE
    UPLOAD_IMAGE_COUNT("I001", "업로드 이미지 개수가 맞지 않습니다.(메인이미지 1개, 썸네일 1개 있어야 합니다)"),
    ;

    private final String code;
    private final String message;
}
