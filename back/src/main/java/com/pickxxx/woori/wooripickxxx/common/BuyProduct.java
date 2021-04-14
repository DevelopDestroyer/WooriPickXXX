package com.pickxxx.woori.wooripickxxx.common;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class BuyProduct {
    private String name;
    private Integer price;  //제품 갯수 * 가격
    private Integer number; //제품 갯수
/*
    public Integer getPrice() {
        return price;
    }

    public String getName() {
        return name;
    }

    public Integer getNumber() {
        return number;
    }


    public void setPrice(Integer price) {
        this.price = price;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }
*/
}
