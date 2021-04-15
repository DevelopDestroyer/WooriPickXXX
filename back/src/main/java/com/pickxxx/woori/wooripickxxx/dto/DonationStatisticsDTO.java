package com.pickxxx.woori.wooripickxxx.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;

@Builder
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class DonationStatisticsDTO {
    private Integer totalDonationMoney;
    private ArrayList<DonationDTO> donationRatioStatus;
    private ArrayList<MemberDTO> memberDTOs;
}
