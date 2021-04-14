package com.pickxxx.woori.wooripickxxx.type;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class SaleCompany {
    private String companyName;
    private Integer salePercentage;
    private Integer maximumTotalSalePrice;
}