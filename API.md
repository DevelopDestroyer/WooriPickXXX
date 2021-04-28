# 1. 멤버 API
## 1.1. 멤버가입
### URL
[POST] /api/members
### Request
``` 
{
    "name": "이재용",
    "nickname": "이재용",
    "accountNumber": "12345-12345-12345",
    "accountMoney": "10000000",
    "phoneNumber": "010-1111-1111",
    "password": "000000"
}
```

### Response
```
{
    "statusCode": "OK",
    "message": "SUCCESS",
    "data": {
        "name": "이재용",
        "id": 5,
        "phoneNumber": "010-1111-1111",
        "accountNumber": "12345-12345-12345",
        "accountMoney": "10000000",
        "point": 0
    }
}
```

### Exception
**아이디가 이미 존재할 경우**
```
{
    "statusCode": "FAIL",
    "message": "동일한 닉네임의 사용자가 존재합니다.",
    "errorCode": "U003"
}
```

## 1.2. 닉네임 존재유무 확인
### URL
[GET] /api/members/nicknameCheck/{nickname}
### Request
``` 
/api/members/nicknameCheck/태호
```

### Response
```
{
    "statusCode": "OK",
    "message": "SUCCESS",
    "data": true
}
```
> 결과 data가 true이면 이미 존재하는 닉네임이며, false이면 존재하지 않는 사용자이므로 가입이 가능한 닉네임 임에 유의합니다.

### Exception
**아이디가 이미 존재할 경우**
```
{
    "statusCode": "FAIL",
    "message": "동일한 닉네임의 사용자가 존재합니다.",
    "errorCode": "U003"
}
```

## 1.3. 카테고리 등록
### URL
[POST] /api/members/category
### Request
``` 
    {
        "benefitCategoryList": [
             {
                 "userNickname" : "진영",
                 "categoryId" : 103
             },
             {
                 "userNickname" : "진영",
                 "categoryId" : 106
             }
         ]
    }
```
> 이 요청을 보내기 위해서는 멤버가입이 선행되어 있어야 합니다. 실제로 존재하지 않는 사용자는 카테고리를 추가할수 없기 때문입니다.
> 그리고 로직상 기존에 카테고리가 있는지 확인 후, 있을 경우 모두 삭제하고 새로 추가합니다.
> 즉, 이 API는 카테고리 수정하기 위한 용도로도 사용가능합니다.
### Response
```
{
    "statusCode": "OK",
    "message": "SUCCESS",
    "data": true
}
```

### Exception
**닉네임이 존재하지 않을 경우**
```
{
    "statusCode": "FAIL",
    "message": "존재하지 않는 사용자입니다.",
    "errorCode": "U001"
}
```
**카테고리를 두개를 요청한 것이 아닐 경우**
```
{
    "statusCode": "FAIL",
    "message": "두개의 카테고리를 지정해야 합니다.",
    "errorCode": "BC001"
}
```
**요청한 2개의 카테고리에 대해 닉네임이 서로 다를 경우**
```
{
    "statusCode": "FAIL",
    "message": "요청한 카테고리 2개에 대해 가입하고자하는 사용자의 닉네임이 다릅니다.",
    "errorCode": "BC002"
}
```
**존재하지 않는 카테고리를 등록하려고 했을 경우**
```
{
    "statusCode": "FAIL",
    "message": "존재하지 않는 카테고리가 있습니다.",
    "errorCode": "BC003"
}
```

## 1.4. 내 정보 조회
### URL
[GET] /api/members/{nickname}
### Request
``` 
/api/members/태호
```

### Response
```
{
    "statusCode": "OK",
    "message": "SUCCESS",
    "data": {
        "name": "이태호",
        "nickname": "태호",
        "phoneNumber": "010-1111-1234",
        "accountNumber": "1004-100-12345",
        "accountMoney": 500000,
        "point": 85000
    }
}
```

### Exception
**존재하지 않는 닉네임일 경우**
```
{
    "statusCode": "FAIL",
    "message": "존재하지 않는 사용자입니다.",
    "errorCode": "U001"
}
```

## 1.5. 내 카테고리 조회
### URL
[GET] /api/members/{nickname}/category
### Request
``` 
/api/members/태호/category
```

### Response
```
{
    "statusCode": "OK",
    "message": "SUCCESS",
    "data": [
        {
            "categoryId": 101
        },
        {
            "categoryId": 102
        }
    ]
}
```

## 1.6. 카테고리 추천 (우리은행API 연동과 코사인유사도측정 기반 추천시스템)
### URL
[GET] /api/members/{nickname}/category/recommend
### Request
``` 
/api/members/태호/category/recommend
```

### Response
```
{
    "statusCode": "OK",
    "message": "SUCCESS",
    "data": [
        {
            "categoryId": 101
        },
        {
            "categoryId": 102
        }
    ]
}
```
### Exception
> 예외처리 없음

# 2. 친구 API
## 2.1. 전화번호 리스트로 친구신청 가능한 리스트 받아오기
### URL
[POST] /api/friends
### Request
``` 
    {
        "nickname" : "태호",
        "list": [
             {"phoneNumber" : "010-1111-1234"},
             {"phoneNumber" : "010-2222-1234"},
             {"phoneNumber" : "010-3333-1234"}
         ]
    }
```
> nickname에는 사용자의 닉네임, list.phoneNumber는 사용자의 주소록에 있는 전화번호를 의미합니다. 전화번호 리스트는 갯수 제약 없이 전송 가능합니다.
> GET을 사용하려하였으나 Req Body에 데이터를 넣기 어려운 문제로 POST Method로 전환하였음.


### Response
```
{
    "statusCode": "OK",
    "message": "SUCCESS",
    "data": [
        {
            "name": "이태호",
            "nickname": "태호",
            "phoneNumber": "010-1111-1234"
        },
        {
            "name": "이진영",
            "nickname": "진영",
            "phoneNumber": "010-2222-1234"
        },
        {
            "name": "최서진",
            "nickname": "서진",
            "phoneNumber": "010-3333-1234"
        }
    ]
}
```
> 이미 친구인 상태가 아니면서, 친구 신청 가능한 사용자들의 정보를 담고 있습니다.
> 여기서 nickname은 key로 쓰임에 따라 사용자 친구신청 시 필요하므로 프론트에서 잘 가지고 있어야 합니다.

### Exception
> 예외처리 없음

## 2.2. 친구추가
### URL
[POST] /api/friend
### Request
``` 
    {
        "userNickname" : "태호",
        "friendNickname" : "진영"
    }
```
> userNickname에는 현재 사용자의 닉네임, friendNickname은 사용자가 친구하고자 하는 멤버의 닉네임을 의미 합니다.


### Response
```
{
    "statusCode": "OK",
    "message": "SUCCESS",
    "data": true
}
```

### Exception
**이미 친구일 경우**
```
{
    "statusCode": "FAIL",
    "message": "이미 친구입니다.",
    "errorCode": "F001"
}
```
**자기 자신을 친구신청 할 경우**
```
{
    "statusCode": "FAIL",
    "message": "스스로와 친구는 할 수 없습니다.",
    "errorCode": "F002"
}
```
**친구를 신청하려는 사용자(userNickname)이 존재하지 않을 경우**
```
{
    "statusCode": "FAIL",
    "message": "존재하지 않는 사용자입니다.",
    "errorCode": "U001"
}
```
**대상 친구(friendNickname)가 이 존재하지 않을 경우**
```
{
    "statusCode": "FAIL",
    "message": "존재하지 않는 사용자입니다.",
    "errorCode": "U001"
}
```

# 3. 랭크 API
## 3.1. 특정 유저의 닉네임으로 랭킹정보 가져오기
### URL
[GET] /api/rank/friends/{nickname}
### Request
``` 
/api/rank/friends/태호
```
> URL Path를 통해 닉네임 정보를 request로 보냅니다.


### Response
```
{
    "statusCode": "OK",
    "message": "SUCCESS",
    "data": [
        {
            "friendNickname": "진영",
            "friendPoint": 95000
        },
        {
            "friendNickname": "태호",
            "friendPoint": 85000
        },
        {
            "friendNickname": "정민",
            "friendPoint": 80000
        }
    ]
}
```
> 본인을 포함한 친구들의 랭킹정보를 반환합니다. 높은 순서로 오더링 되어 반환됩니다.

### Exception
> 예외처리 없음

## 3.2. 특정 유저에 대한 혜택 누적 통계 및 순위정보 가져오기 (투게더 페이지)
### URL
[GET] /api/members/{userNickname}/together
### Request
``` 
/api/members/태호/together
```
> URL Path를 통해 닉네임 정보를 request로 보냅니다.

### Response
```
{
    "statusCode": "OK",
    "message": "SUCCESS",
    "data": {
        "thisMonthBenefitPoint": 6000,
        "ago3MonthBenefitPoint": 223450,
        "myRank": 80,
        "aveRank": 60
    }
}
```
> 이번달 혜택 누적, 지난 3개월 혜택 누적, 나의 랭킹 순위퍼센테이지, 전체 평균 금액의 순위 정보를 반환합니다.
> 투게더 페이지에서 필요한 모든 정보들을 포함하고 있습니다. 

### Exception
> 예외처리 없음

# 4. 거래 API
## 4.1. 빠른 구매 (시연을 위한 간편 구매요청)
### URL
[GET] /api/trading/buy/fast/{userNickname}/{companyName}/{product}/{price}
### Request
``` 
/api/trading/buy/fast/태호/삼성전자/갤럭시s21/20000
```
> 시연을 위해 빠르게 결제를 진행하는 API 입니다.


### Response
```
{
    "statusCode": "OK",
    "message": "SUCCESS",
    "data": true
}
```

### Exception
**계좌잔고보다 비싼 제품을 결제하였을 경우**
```
{
    "statusCode": "FAIL",
    "message": "계좌 잔고가 부족합니다.",
    "errorCode": "T001"
}
```

## 4.2. 기부하기
### URL
[POST] /api/trading/donation
### Request
``` 
{
    "userNickname" : "태호",
    "donationId" : 101,
    "donationPoint" : 5100
}
```

### Response
```
{
    "statusCode": "OK",
    "message": "SUCCESS",
    "data": true
}
```
> ⚠️ 응답에 시간이 오래걸릴 수 있습니다 : 내역을 블록체인에 기록함에 따라 마이닝 시간이 소요되며 이에 따른 시간이 다소 발생할 수 있습니다.

### Exception
**본인이 가진 포인트보다 많은 금액을 기부하려고 할 때**
```
{
    "statusCode": "FAIL",
    "message": "포인트가 부족합니다.",
    "errorCode": "T002"
}
```

## 4.3. 기부 통계
### URL
[GET] /api/trading/donation/statistics
### Request
``` 
/api/trading/donation/statistics
```

### Response
```
{
    "statusCode": "OK",
    "message": "SUCCESS",
    "data": {
        "totalDonationMoney": 50000,
        "donationRatioStatus": [
            {
                "donationId": 201,
                "totalDonationCount": 1
            },
            {
                "donationId": 202,
                "totalDonationCount": 1
            },
            {
                "donationId": 203,
                "totalDonationCount": 0
            },
            {
                "donationId": 204,
                "totalDonationCount": 0
            },
            {
                "donationId": 205,
                "totalDonationCount": 0
            }
        ],
        "memberDTOs": [
            {
                "nickname": "진영",
                "point": 50000
            },
            {
                "nickname": "태호",
                "point": 10000
            },
            {
                "nickname": "서진",
                "point": 0
            },
            {
                "nickname": "정민",
                "point": 0
            }
        ]
    }
}
```
> 기부페이지 첫화면에 표출돼는 다양한 시각자료를 위한 API 입니다.
> 이번달 기부 총금액 계산, 카테고리별 기부 카운팅, 지난달 기부왕 추출합니다. 
> 지난달 기부왕의 경우, 기부금액이 높은 순서로 정렬 하였습니다.

### Exception
> 예외처리 없음


## 4.4. 나의 혜택 적립 내역
### URL
[GET] /api/trading/benefits/{userNickname}
### Request
``` 
/api/trading/benefits/태호
```

### Response
```
{
    "statusCode": "OK",
    "message": "SUCCESS",
    "data": [
        {
            "companyName": "지구샵",
            "categoryId": 101,
            "totalBuyPrice": -10000,
            "point": 3000,
            "date": "2021-04-17"
        },
        {
            "companyName": "송포어스",
            "categoryId": 101,
            "totalBuyPrice": -10000,
            "point": 3000,
            "date": "2021-04-15"
        },
        {
            "companyName": "지구샵",
            "categoryId": 101,
            "totalBuyPrice": -10000,
            "point": 123450,
            "date": "2021-03-15"
        },
        {
            "companyName": "연화바루",
            "categoryId": 101,
            "totalBuyPrice": -10000,
            "point": 100000,
            "date": "2021-02-23"
        }
    ]
}
```
> 최근 순으로 나열하여 보내줍니다

### Exception
> 예외처리 없음


## 4.5. 돈복사
> ⚠️ 테스트 편의를 위해 제작된 API 이므로 사용에 유의합니다.
> 입력한 계좌잔고금액과 포인트대로 초기화를 진행합니다.
### URL
[GET] /api/trading/showMeTheMoney/{userNickname}/{money}/{point}
### Request
``` 
/api/trading/showMeTheMoney/태호/99999999/500000
```

### Response
```
{
    "statusCode": "OK",
    "message": "SUCCESS",
    "data": true
}
```

### Exception
> 예외처리 없음


# 5. 제휴회사 API
## 5.1. 제휴회사 리스트 받아오기
### URL
[GET] /api/{userNickname}/company
### Request
``` 
/api/태호/company
```

### Response
```
{
    "statusCode": "OK",
    "message": "SUCCESS",
    "data": [
        {
            "companyName": "더피커",
            "categoryId": 101,
            "description": "건강한 자원의 순환을 위해 지속가능한 생활 대안 제품 판매",
            "thumbNailPath": "/images/company/1.png",
            "totalLike": 13,
            "userLike": false
        },
        {
            "companyName": "보틀팩토리",
            "categoryId": 101,
            "description": "일회용품을 줄이기 위한 텀블러 테이크아웃 서비스 제공",
            "thumbNailPath": "/images/company/2.png",
            "totalLike": 19,
            "userLike": false
        },
        {
            "companyName": "지구샵",
            "categoryId": 101,
            "description": "낭비 없는 소비를 위한 생필품 및 식품 판매",
            "thumbNailPath": "/images//company/3.png",
            "totalLike": 34,
            "userLike": true
        },
        {
            "companyName": "송포어스",
            "categoryId": 101,
            "description": "제로웨이스트를 위한 상품 판매와 비건 카페를 동시 운영",
            "thumbNailPath": "/images/company/4.jpg",
            "totalLike": 36,
            "userLike": false
        },
        {
            "companyName": "지구별가게",
            "categoryId": 101,
            "description": "다회용품 브랜드 `소락`이 만든 제로웨이스트 제품 판매",
            "thumbNailPath": "/images/company/5.jpg",
            "totalLike": 37,
            "userLike": false
        }
    ]
}
```
> 제휴회사정보 리스트 페이지에서 사용하는 API 입니다.
> 사용자가 좋아요를 누른 기업이라면 userLike가 true값을 가집니다.

### Exception
> 예외처리 없음

## 5.2. 좋아요 추가
### URL
[POST] /api/company/like
### Request
``` 
{
    "companyName": "지구별가게",
    "userNickname": "태호"
}
```

### Response
```
{
    "statusCode": "OK",
    "message": "SUCCESS",
    "data": true
}
```

### Exception
**이미 좋아요인데 또 좋아요를 시도할 경우**
```
{
    "statusCode": "FAIL",
    "message": "이미 좋아요를 눌렀습니다.",
    "errorCode": "C001"
}
```

## 5.3. 좋아요 취소
### URL
[DELETE] /api/company/like
### Request
``` 
{
    "companyName": "지구별가게",
    "userNickname": "태호"
}
```
> METHOD가 DELETE임에 유의합니다

### Response
```
{
    "statusCode": "OK",
    "message": "SUCCESS",
    "data": true
}
```

### Exception
> 예외처리 없음

# 6. 블록체인 API
## 6.1. 기부 블록체인 조회
### URL
[GET] /api/blocks
### Request
``` 
/api/blocks
```

### Response
```
[
    {
        "hash": "000006fc615cfe3026da94ab8d9b0e988a425385bf65cd8a18392b63fd7948a1",
        "previousHash": "000001576ca15a729644e0ddcb11b5d728f6364174d26990512cfb752aafae54",
        "data": "너구리;우리핏베네핏 기부;3000;동물보호;2021-04-30",
        "timeStamp": 1619242336119,
        "nonce": 149987,
        "target": "00000",
        "targetDepth": 5
    },
    {
        "hash": "000001576ca15a729644e0ddcb11b5d728f6364174d26990512cfb752aafae54",
        "previousHash": "000006fc615cfe3026da94ab8d9b0e988a425385bf65cd8a18392b63fd7948a1",
        "data": "리리;우리핏베네핏 기부;3000;친환경;2021-04-30",
        "timeStamp": 1619242307746,
        "nonce": 603972,
        "target": "00000",
        "targetDepth": 5
    },
    {
        "hash": "000006fc615cfe3026da94ab8d9b0e988a425385bf65cd8a18392b63fd7948a1",
        "previousHash": "0",
        "data": "우리은행;월드비전;5000000;아동 - 노인;2021-04-30",
        "timeStamp": 1619242137296,
        "nonce": 1285662,
        "target": "00000",
        "targetDepth": 5
    }
]
```
> 최근에 등록된 순으로 정렬하여 받아볼 수 있습니다. data의 내용은 ;를 구분자로 사용하며 각 순서별 의미는 보낸사람;받는사람;비용;항목(메모);날짜 입니다.

### Exception
> 예외처리 없음

## 6.2. 블록체인 등록
> ⚠️ 이 API는 테스트 용도이므로 프론트엔드에서 사용하지 않도록 유의합니다.
> "4.2 기부하기" API를 이용하면, 기부내역이 자동으로 블록체인에 등록됩니다.
### URL
[POST] /api/blocks
### Request
body request 타입 : form-data
key명 : data
``` 
key : data
value : 정민;우리핏베네핏 기부;15000;구호물품;2021-05-01
```

### Response
```
[
    {
        "hash": "000006fc615cfe3026da94ab8d9b0e988a425385bf65cd8a18392b63fd7948a1",
        "previousHash": "000001576ca15a729644e0ddcb11b5d728f6364174d26990512cfb752aafae54",
        "data": "너구리;우리핏베네핏 기부;3000;동물보호;2021-04-30",
        "timeStamp": 1619242336119,
        "nonce": 149987,
        "target": "00000",
        "targetDepth": 5
    },
    {
        "hash": "000001576ca15a729644e0ddcb11b5d728f6364174d26990512cfb752aafae54",
        "previousHash": "000006fc615cfe3026da94ab8d9b0e988a425385bf65cd8a18392b63fd7948a1",
        "data": "리리;우리핏베네핏 기부;3000;친환경;2021-04-30",
        "timeStamp": 1619242307746,
        "nonce": 603972,
        "target": "00000",
        "targetDepth": 5
    },
    {
        "hash": "000006fc615cfe3026da94ab8d9b0e988a425385bf65cd8a18392b63fd7948a1",
        "previousHash": "0",
        "data": "우리은행;월드비전;5000000;아동 - 노인;2021-04-30",
        "timeStamp": 1619242137296,
        "nonce": 1285662,
        "target": "00000",
        "targetDepth": 5
    }
]
```

### Exception
> 예외처리 없음

# 7. 우리은행 API
## 7.1. 전화번호 기반으로 계좌리스트 불러오기
### URL
[GET] /api/wooribank/userPhoneNumber/{userPhoneNumber}/accounts
### Request
``` 
/api/wooribank/userPhoneNumber/010-0000-0000/accounts
```

### Response
```
{
    "dataHeader": {},
    "dataBody": {
        "GRID_CNT": "6",
        "GRID": [
            {
                "ACNO": "10023898*****",
                "ACCT_KND": "P",
                "PRD_NM": "WON 통장",
                "CUCD": "KRW",
                "PBOK_BAL": "2014050.000",
                "FAXC_BAL": "0.000",
                "NEW_DT": "2021-02-18",
                "XPR_DT": "2022-02-18",
                "ADNT_RGS_YN": "N",
                "PSKL_ACT_YN": "Y",
                "ACT_STCD": "D"
            },
            {
                "ACNO": "10022821*****",
                "ACCT_KND": "P",
                "PRD_NM": "위비모바일통장",
                "CUCD": "KRW",
                "PBOK_BAL": "28012200.000",
                "FAXC_BAL": "0.000",
                "NEW_DT": "2021-03-10",
                "XPR_DT": "2022-02-28",
                "ADNT_RGS_YN": "N",
                "PSKL_ACT_YN": "N",
                "ACT_STCD": "A"
            },
            {
                "ACNO": "10021778*****",
                "ACCT_KND": "P",
                "PRD_NM": "스무살우리 통장",
                "CUCD": "KRW",
                "PBOK_BAL": "458900.000",
                "FAXC_BAL": "0.000",
                "NEW_DT": "2020-04-09",
                "XPR_DT": "2022-03-10",
                "ADNT_RGS_YN": "Y",
                "PSKL_ACT_YN": "N",
                "ACT_STCD": "D"
            },
            {
                "ACNO": "10404860*****",
                "ACCT_KND": "J",
                "PRD_NM": "우리 Magic6 적금",
                "CUCD": "KRW",
                "PBOK_BAL": "360000.000",
                "FAXC_BAL": "0.000",
                "NEW_DT": "2020-10-26",
                "XPR_DT": "2021-10-26",
                "ADNT_RGS_YN": "N",
                "PSKL_ACT_YN": "Y",
                "ACT_STCD": "D"
            },
            {
                "ACNO": "10730751*****",
                "ACCT_KND": "U",
                "PRD_NM": "주택청약종합저축",
                "CUCD": "KRW",
                "PBOK_BAL": "6920000.000",
                "FAXC_BAL": "0.000",
                "NEW_DT": "2020-10-26",
                "XPR_DT": "2048-09-09",
                "ADNT_RGS_YN": "Y",
                "PSKL_ACT_YN": "N",
                "ACT_STCD": "A"
            },
            {
                "ACNO": "120674*******",
                "ACCT_KND": "L",
                "PRD_NM": "가계적금관계대출",
                "CUCD": "KRW",
                "PBOK_BAL": "0000000.000",
                "FAXC_BAL": "0.000",
                "NEW_DT": "2021-04-04",
                "XPR_DT": "2021-06-23",
                "ADNT_RGS_YN": "",
                "PSKL_ACT_YN": "N",
                "ACT_STCD": "D"
            }
        ]
    }
}
```
> ACCT_KND값이 P인 계좌정보를 활용하세요. PBOK_BAL값이 계좌잔액입니다만, 0값일 가능성이 있으므로 사용하는건 권장하지 않습니다. 시연 시 다른 금액으로 accountMoney값을 전송해주세요. 추후 시연결제API 테스트 시 금액이 부족하면 결제에러가 발생하니 충분히 큰 금액으로 accountMoney값으로 저장하는게 좋습니다.

### Exception
> 예외처리 없음

# 끝 ! 감사합니다 :)
