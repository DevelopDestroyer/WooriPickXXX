package com.pickxxx.woori.wooripickxxx.common;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

public class WooribankAPI {
    public static String getAllAccntInfo(String userPhoneNumber) throws IOException {
        //테스트 환경
        //StringBuilder urlBuilder = new StringBuilder("http://localhost:8000/api/wooribank/test/userAccntInfo");
        //운영 환경
        StringBuilder urlBuilder = new StringBuilder("https://openapi.wooribank.com:444/oai/wb/v1/finance/getIndivAllAccInfo");
        URL url = new URL(urlBuilder.toString());
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("POST");
        //conn.set

        conn.setRequestProperty("appkey", "l7xxp2bXo3SM7sNt3VuicNlqI5v9C3zy14Xd");

        conn.setRequestProperty("Content-type", "application/json");

        String body = "{" +
                "\"dataHeader\": {" +
                "\"UTZPE_CNCT_IPAD\": \"\"," +
                "\"UTZPE_CNCT_MCHR_UNQ_ID\": \"\"," +
                "\"UTZPE_CNCT_TEL_NO_TXT\": \"" + userPhoneNumber + "\"," +
                "\"UTZPE_CNCT_MCHR_IDF_SRNO\": \"\"," +
                "\"UTZ_MCHR_OS_DSCD\": \"\"," +
                "\"UTZ_MCHR_OS_VER_NM\": \"\"," +
                "\"UTZ_MCHR_MDL_NM\": \"\"," +
                "\"UTZ_MCHR_APP_VER_NM\": \"\"" +
                "}," +
                "\"dataBody\": {}" +
                "}";
        conn.setFixedLengthStreamingMode(body.getBytes().length);
        conn.setDoOutput(true);

        OutputStream out = conn.getOutputStream();
        out.write(body.getBytes());
        System.out.println("Response code: " + conn.getResponseCode());
        BufferedReader rd;
        if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
        rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
        } else {
        rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
        }
        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = rd.readLine()) != null) {
        sb.append(line);
        }
        rd.close();
        conn.disconnect();
        //System.out.println(sb.toString());
        return sb.toString();
    }

    public static String getTransCustomerList(String userAccountNumber) throws IOException {
        //테스트 환경
        //StringBuilder urlBuilder = new StringBuilder("http://localhost:8000/api/wooribank/test/userTransList");
        //운영 환경
        StringBuilder urlBuilder = new StringBuilder("https://openapi.wooribank.com:444/oai/wb/v1/finance/getAccTransList");
        URL url = new URL(urlBuilder.toString());
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("POST");

        conn.setRequestProperty("appkey", "l7xxp2bXo3SM7sNt3VuicNlqI5v9C3zy14Xd");
        conn.setRequestProperty("Content-type", "application/json");
        //conn.setRequestProperty("token", "");

        String body = "{\n" +
                "  \"dataHeader\": {\n" +
                "    \"UTZPE_CNCT_IPAD\": \"\",\n" +
                "    \"UTZPE_CNCT_MCHR_UNQ_ID\": \"\",\n" +
                "    \"UTZPE_CNCT_TEL_NO_TXT\": \"\",\n" +
                "    \"UTZPE_CNCT_MCHR_IDF_SRNO\": \"\",\n" +
                "    \"UTZ_MCHR_OS_DSCD\": \"\",\n" +
                "    \"UTZ_MCHR_OS_VER_NM\": \"\",\n" +
                "    \"UTZ_MCHR_MDL_NM\": \"\",\n" +
                "    \"UTZ_MCHR_APP_VER_NM\": \"\"\n" +
                "  },\n" +
                "  \"dataBody\": {\n" +
                "    \"INQ_ACNO\": \"110202034341\",\n" +
                "    \"INQ_STA_DT\": \"20200101\",\n" +
                "    \"INQ_END_DT\": \"20210310\",\n" +
                "    \"NEW_DT\": \"20140522\",\n" +
                "    \"ACCT_KND\": \"P\",\n" +
                "    \"CUCD\": \"KRW\"\n" +
                "  }\n" +
                "}";
        conn.setFixedLengthStreamingMode(body.getBytes().length);
        conn.setDoOutput(true);

        OutputStream out = conn.getOutputStream();
        out.write(body.getBytes());
        //System.out.println("Response code: " + conn.getResponseCode());
        BufferedReader rd;
        if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
        rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
        } else {
        rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
        }
        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = rd.readLine()) != null) {
            if(line.contains("TRN_TXT")){
                sb.append(line);
                String[] customer = line.split(": \"");
                sb.append(customer[1].substring(0, customer[1].length()-1) + ";");
            }
        }
        rd.close();
        conn.disconnect();
        //System.out.println(sb.toString());
        String cleanData = sb.toString();
        cleanData = cleanData.replaceAll("\\\"","");

        return cleanData;
    }
}
