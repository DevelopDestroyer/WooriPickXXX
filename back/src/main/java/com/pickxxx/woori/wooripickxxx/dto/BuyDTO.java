package com.pickxxx.woori.wooripickxxx.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.pickxxx.woori.wooripickxxx.common.BuyProduct;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;

@Builder
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class BuyDTO {
    private String userNickname;
    private String companyName;
    private ArrayList<BuyProduct> buyProductList;

    public Integer totalPrice(){
        Integer total = 0;
        for(int i = 0; i < buyProductList.size(); i++){
            total += buyProductList.get(i).getPrice();
        }
        return total;
    }
}
