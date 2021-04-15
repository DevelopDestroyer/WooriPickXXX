package com.pickxxx.woori.wooripickxxx.common;

import jdk.internal.instrumentation.Logger;
import lombok.extern.slf4j.Slf4j;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;

@Slf4j
public class TimeCalcul {
    public String getNowTime(){
        SimpleDateFormat formatter = new SimpleDateFormat ( "yyyy-MM-dd", Locale.KOREA );//yyyy-MM-dd HH:mm:ss
        Date currentTime = new Date ();
        String dTime = formatter.format ( currentTime );
        log.info("Time : " + dTime);

        return dTime;
    }

    public String monthAgo(Integer amount){
        //오늘 날짜를 기준
        Calendar cal = Calendar.getInstance();
        //n개월 전
        cal.add(cal.MONTH, amount);
        String res  = cal.get(cal.YEAR) + "-" + (cal.get(cal.MONTH)+1) + cal.get(cal.DATE);
        log.info("ago : " + res);

        return res;
    }

    public String thisMonthStart(){
        SimpleDateFormat formatter = new SimpleDateFormat ( "yyyy-MM", Locale.KOREA );//yyyy-MM-dd HH:mm:ss
        Date currentTime = new Date ();
        String dTime = formatter.format ( currentTime );
        log.info("Time : " + dTime);

        return dTime+"-01";
    }

    public String thisMonthEnd(){
        SimpleDateFormat formatter = new SimpleDateFormat ( "yyyy-MM", Locale.KOREA );//yyyy-MM-dd HH:mm:ss
        Date currentTime = new Date ();
        String dTime = formatter.format ( currentTime );
        log.info("Time : " + dTime);

        return dTime+"-31";
    }

    public String agoMonthStart(Integer n){
        //3달 전
        Calendar mon = Calendar.getInstance();
        mon.add(Calendar.MONTH , n);//3달 범위 : -3
        String beforeMonth = new java.text.SimpleDateFormat("yyyy-MM-dd").format(mon.getTime());
        log.info("Time : " + beforeMonth);

        String[] ago3MonthStartStrArray = beforeMonth.split("-");
        return ago3MonthStartStrArray[0]+"-"+ago3MonthStartStrArray[1]+"-01";
    }

    public String agoMonthEnd(Integer n){
        //한달 전
        Calendar mon = Calendar.getInstance();
        mon.add(Calendar.MONTH , n);//3달 범위 : -1
        String beforeMonth = new java.text.SimpleDateFormat("yyyy-MM-dd").format(mon.getTime());
        log.info("Time : " + beforeMonth);

        String[] ago3MonthEndStrArray = beforeMonth.split("-");
        return ago3MonthEndStrArray[0]+"-"+ago3MonthEndStrArray[1]+"-31";
    }

    public String getDateDay(String date, String dateType) throws Exception {//date : 날짜, dateType : 날짜 형식(yyyy-MM-dd)
        String day = "" ;

        SimpleDateFormat dateFormat = new SimpleDateFormat(dateType) ;
        Date nDate = dateFormat.parse(date) ;

        Calendar cal = Calendar.getInstance() ;
        cal.setTime(nDate);

        int dayNum = cal.get(Calendar.DAY_OF_WEEK) ;

        switch(dayNum){
            case 1:
                day = "일";
                break ;
            case 2:
                day = "월";
                break ;
            case 3:
                day = "화";
                break ;
            case 4:
                day = "수";
                break ;
            case 5:
                day = "목";
                break ;
            case 6:
                day = "금";
                break ;
            case 7:
                day = "토";
                break ;
        }
        return day ;
    }

}
