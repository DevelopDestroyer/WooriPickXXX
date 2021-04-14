package com.pickxxx.woori.wooripickxxx.type;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class SaleProduct {
    private String productName;
    private Integer salePercentage;
}
