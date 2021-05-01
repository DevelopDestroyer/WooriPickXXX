/* 멤버(회원) 정보 */
INSERT INTO MEMBER (NAME, NICKNAME, PASSWORD, PHONE_NUMBER, ACCOUNT_NUMBER, ACCOUNT_MONEY, POINT) VALUES('이태호', '태호', '000000', '010-1111-1234', '1004-100-12345', 500000, 85000);
INSERT INTO MEMBER (NAME, NICKNAME, PASSWORD, PHONE_NUMBER, ACCOUNT_NUMBER, ACCOUNT_MONEY, POINT) VALUES('이진영', '진영', '000000', '010-2222-1234', '1005-100-12345', 500000, 90000);
INSERT INTO MEMBER (NAME, NICKNAME, PASSWORD, PHONE_NUMBER, ACCOUNT_NUMBER, ACCOUNT_MONEY, POINT) VALUES('최서진', '서진', '000000', '010-3333-1234', '1006-100-12345', 500000, 95000);
INSERT INTO MEMBER (NAME, NICKNAME, PASSWORD, PHONE_NUMBER, ACCOUNT_NUMBER, ACCOUNT_MONEY, POINT) VALUES('성정민', '정민', '000000', '010-4444-1234', '1007-100-12345', 500000, 80000);

INSERT INTO MEMBER (NAME, NICKNAME, PASSWORD, PHONE_NUMBER, ACCOUNT_NUMBER, ACCOUNT_MONEY, POINT) VALUES('위사랑', '짱', '000000', '010-5555-1234', '1007-100-12345', 200000, 110000);

INSERT INTO MEMBER (NAME, NICKNAME, PASSWORD, PHONE_NUMBER, ACCOUNT_NUMBER, ACCOUNT_MONEY, POINT) VALUES('안재홍', '참깨라면', '000000', '012-1111-1111', '1004-110-12341', 500000, 85000);
INSERT INTO MEMBER (NAME, NICKNAME, PASSWORD, PHONE_NUMBER, ACCOUNT_NUMBER, ACCOUNT_MONEY, POINT) VALUES('추재윤', '츄파춥스', '000000', '012-2222-2222', '1005-110-12342', 500000, 90000);
INSERT INTO MEMBER (NAME, NICKNAME, PASSWORD, PHONE_NUMBER, ACCOUNT_NUMBER, ACCOUNT_MONEY, POINT) VALUES('김도균', '리리', '000000', '011-3333-3333', '1006-110-12343', 500000, 95000);
INSERT INTO MEMBER (NAME, NICKNAME, PASSWORD, PHONE_NUMBER, ACCOUNT_NUMBER, ACCOUNT_MONEY, POINT) VALUES('김가은', '너구리', '000000', '011-4444-4444', '1007-110-12344', 500000, 80000);
INSERT INTO MEMBER (NAME, NICKNAME, PASSWORD, PHONE_NUMBER, ACCOUNT_NUMBER, ACCOUNT_MONEY, POINT) VALUES('김근종', '초코송이', '000000', '011-5555-5555', '1004-1110-12341', 500000, 85000);
INSERT INTO MEMBER (NAME, NICKNAME, PASSWORD, PHONE_NUMBER, ACCOUNT_NUMBER, ACCOUNT_MONEY, POINT) VALUES('고경태', '배방읍보안관', '000000', '011-6666-6666', '1005-1210-12342', 500000, 90000);
INSERT INTO MEMBER (NAME, NICKNAME, PASSWORD, PHONE_NUMBER, ACCOUNT_NUMBER, ACCOUNT_MONEY, POINT) VALUES('양훈지', '고향만두', '000000', '011-7777-7777', '1006-1130-12343', 500000, 95000);
INSERT INTO MEMBER (NAME, NICKNAME, PASSWORD, PHONE_NUMBER, ACCOUNT_NUMBER, ACCOUNT_MONEY, POINT) VALUES('정윤철', '레쓰비', '000000', '011-8888-8888', '1007-1410-12344', 500000, 80000);
INSERT INTO MEMBER (NAME, NICKNAME, PASSWORD, PHONE_NUMBER, ACCOUNT_NUMBER, ACCOUNT_MONEY, POINT) VALUES('임재성', '오렌지', '000000', '011-9999-9999', '1004-1105-12341', 500000, 85000);
INSERT INTO MEMBER (NAME, NICKNAME, PASSWORD, PHONE_NUMBER, ACCOUNT_NUMBER, ACCOUNT_MONEY, POINT) VALUES('이부형', '포도', '000000', '011-0000-0000', '1005-1104-12342', 500000, 90000);
INSERT INTO MEMBER (NAME, NICKNAME, PASSWORD, PHONE_NUMBER, ACCOUNT_NUMBER, ACCOUNT_MONEY, POINT) VALUES('이성범', '아보카도', '000000', '011-1111-1111', '1006-1150-12343', 500000, 95000);
INSERT INTO MEMBER (NAME, NICKNAME, PASSWORD, PHONE_NUMBER, ACCOUNT_NUMBER, ACCOUNT_MONEY, POINT) VALUES('구광민', '마사리올', '000000', '011-2222-2222', '1007-1140-12344', 500000, 80000);
INSERT INTO MEMBER (NAME, NICKNAME, PASSWORD, PHONE_NUMBER, ACCOUNT_NUMBER, ACCOUNT_MONEY, POINT) VALUES('한재선', '달나라치느님', '000000', '011-3333-3333', '10027-110-12344', 500000, 80000);

/* 멤버 간 친구관계 */
INSERT INTO FRIEND (USER_NICKNAME, FRIEND_NICKNAME) VALUES('태호', '정민');
INSERT INTO FRIEND (USER_NICKNAME, FRIEND_NICKNAME) VALUES('태호', '진영');
INSERT INTO FRIEND (USER_NICKNAME, FRIEND_NICKNAME) VALUES('진영', '서진');
INSERT INTO FRIEND (USER_NICKNAME, FRIEND_NICKNAME) VALUES('짱', '태호');


/* 멤버별 선택한 혜택 카테고리 */
INSERT INTO BENEFIT_CATEGORY (USER_NICKNAME, CATEGORY_ID) VALUES ('태호', 101);
INSERT INTO BENEFIT_CATEGORY (USER_NICKNAME, CATEGORY_ID) VALUES ('태호', 102);
INSERT INTO BENEFIT_CATEGORY (USER_NICKNAME, CATEGORY_ID) VALUES ('정민', 103);
INSERT INTO BENEFIT_CATEGORY (USER_NICKNAME, CATEGORY_ID) VALUES ('정민', 104);
INSERT INTO BENEFIT_CATEGORY (USER_NICKNAME, CATEGORY_ID) VALUES ('진영', 105);
INSERT INTO BENEFIT_CATEGORY (USER_NICKNAME, CATEGORY_ID) VALUES ('진영', 106);
INSERT INTO BENEFIT_CATEGORY (USER_NICKNAME, CATEGORY_ID) VALUES ('서진', 105);
INSERT INTO BENEFIT_CATEGORY (USER_NICKNAME, CATEGORY_ID) VALUES ('서진', 106);
INSERT INTO BENEFIT_CATEGORY (USER_NICKNAME, CATEGORY_ID) VALUES ('짱', 101);
INSERT INTO BENEFIT_CATEGORY (USER_NICKNAME, CATEGORY_ID) VALUES ('짱', 106);


/* 기간별 통계를 위한 거래장부 */
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('정민', 'DONATION', '', 0, 201, -10000, '2021-04-02');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('서진', 'DONATION', '', 0, 201, -20000, '2021-04-03');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('태호', 'DONATION', '', 0, 201, -10000, '2021-04-15');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('태호', 'WITHDRAW', '', 350000, -1, -5000, '2021-04-15');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('진영', 'DONATION', '', 0, 202, -30000, '2021-04-15');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('태호', 'BENEFIT', '연화바루', -10000, 101, 100000, '2021-05-23');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('태호', 'BENEFIT', '지구샵', -10000, 101, 123450, '2021-05-15');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('태호', 'BENEFIT', '송포어스', -10000, 101, 3000, '2021-05-15');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('태호', 'BENEFIT', '지구샵', -10000, 101, 3000, '2021-05-17');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('짱', 'BENEFIT', '스타벅스', -10000, 101, 5000, '2021-05-15');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('짱', 'BENEFIT', '스타벅스', -10000, 101, 5000, '2021-05-17');

INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('태호', 'BENEFIT', '더피커', -10000, 101, 53000, '2021-05-17');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('서진', 'BENEFIT', '더피커', -10000, 101, 32000, '2021-05-17');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('정민', 'BENEFIT', '더피커', -10000, 101, 5000, '2021-05-17');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('진영', 'BENEFIT', '더피커', -10000, 101, 60000, '2021-05-17');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('포도', 'BENEFIT', '더피커', -10000, 101, 120000, '2021-05-17');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('아보카도', 'BENEFIT', '더피커', -10000, 101, 35220, '2021-05-17');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('마사리올', 'BENEFIT', '더피커', -10000, 101, 23000, '2021-05-17');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('달나라치느님', 'BENEFIT', '더피커', -10000, 101, 5000, '2021-05-17');


/* 3월 기부 */
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('참깨라면', 'DONATION', '', 0, 201, -5500000, '2021-05-02');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('츄파춥스', 'DONATION', '', 0, 201, -5040500, '2021-05-03');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('리리', 'DONATION', '', 0, 202, -4203100, '2021-05-15');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('너구리', 'DONATION', '', 0, 203, -3850000, '2021-05-02');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('초코송이', 'DONATION', '', 0, 204, -3100000, '2021-05-03');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('배방읍보안관', 'DONATION', '', 0, 205, -2153000, '2021-05-15');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('고향만두', 'DONATION', '', 0, 205, -1110000, '2021-05-02');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('레쓰비', 'DONATION', '', 0, 203, -1000000, '2021-05-03');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('오렌지', 'DONATION', '', 0, 205, -925000, '2021-05-15');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('포도', 'DONATION', '', 0, 203, -844000, '2021-05-15');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('아보카도', 'DONATION', '', 0, 202, -760000, '2021-05-15');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('마사리올', 'DONATION', '', 0, 201, -600000, '2021-05-15');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('달나라치느님', 'DONATION', '', 0, 201, -560000, '2021-05-15');

/* 4월 기부*/
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('참깨라면', 'DONATION', '', 0, 201, -5500000, '2021-04-02');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('츄파춥스', 'DONATION', '', 0, 201, -3040500, '2021-04-03');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('리리', 'DONATION', '', 0, 202, -4203100, '2021-04-15');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('너구리', 'DONATION', '', 0, 203, -150000, '2021-04-02');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('초코송이', 'DONATION', '', 0, 204, -100000, '2021-04-03');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('배방읍보안관', 'DONATION', '', 0, 205, -100000, '2021-04-15');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('고향만두', 'DONATION', '', 0, 205, -10000, '2021-04-02');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('레쓰비', 'DONATION', '', 0, 203, -20000, '2021-04-03');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('오렌지', 'DONATION', '', 0, 205, -10000, '2021-04-15');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('포도', 'DONATION', '', 0, 203, -500, '2021-04-15');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('아보카도', 'DONATION', '', 0, 202, -1000, '2021-04-15');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('마사리올', 'DONATION', '', 0, 201, -10000, '2021-04-15');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, COMPANY_NAME, TOTAL_BUY_PRICE, CATEGORY_ID, POINT, DATE) VALUES ('달나라치느님', 'DONATION', '', 0, 201, -25000, '2021-04-15');



/* 거래내역 기반 혜택 카테고리 추천 시스템 (우리은행 거래API 연동) */
INSERT INTO TRADING_COUNTER (USER_NICKNAME, COMPANY_NAME, CNT) VALUES ('짱', 'CGV', 1);
INSERT INTO TRADING_COUNTER (USER_NICKNAME, COMPANY_NAME, CNT) VALUES ('짱', '이마트', 2);
INSERT INTO TRADING_COUNTER (USER_NICKNAME, COMPANY_NAME, CNT) VALUES ('짱', 'S-OIL', 0);
INSERT INTO TRADING_COUNTER (USER_NICKNAME, COMPANY_NAME, CNT) VALUES ('짱', '스타벅스', 3);

INSERT INTO TRADING_COUNTER (USER_NICKNAME, COMPANY_NAME, CNT) VALUES ('진영', 'CGV', 30);
INSERT INTO TRADING_COUNTER (USER_NICKNAME, COMPANY_NAME, CNT) VALUES ('진영', '이마트', 20);
INSERT INTO TRADING_COUNTER (USER_NICKNAME, COMPANY_NAME, CNT) VALUES ('진영', 'S-OIL', 50);
INSERT INTO TRADING_COUNTER (USER_NICKNAME, COMPANY_NAME, CNT) VALUES ('진영', '스타벅스', 10);

INSERT INTO TRADING_COUNTER (USER_NICKNAME, COMPANY_NAME, CNT) VALUES ('서진', 'CGV', 11);
INSERT INTO TRADING_COUNTER (USER_NICKNAME, COMPANY_NAME, CNT) VALUES ('서진', '이마트', 25);
INSERT INTO TRADING_COUNTER (USER_NICKNAME, COMPANY_NAME, CNT) VALUES ('서진', 'S-OIL', 2);
INSERT INTO TRADING_COUNTER (USER_NICKNAME, COMPANY_NAME, CNT) VALUES ('서진', '스타벅스', 27);

INSERT INTO TRADING_COUNTER (USER_NICKNAME, COMPANY_NAME, CNT) VALUES ('정민', 'CGV', 0);
INSERT INTO TRADING_COUNTER (USER_NICKNAME, COMPANY_NAME, CNT) VALUES ('정민', '이마트', 0);
INSERT INTO TRADING_COUNTER (USER_NICKNAME, COMPANY_NAME, CNT) VALUES ('정민', 'S-OIL', 3);
INSERT INTO TRADING_COUNTER (USER_NICKNAME, COMPANY_NAME, CNT) VALUES ('정민', '스타벅스', 0);


/* 제휴회사 정보 */
INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('더피커', 101, '건강한 자원의 순환을 위해 일회용품을 줄이기 위해 지속가능한 생활 대안제품을 판매해요.', 'company_1_1.png');
INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('보틀팩토리', 101, '일상의 환경문제를 해결하기 위해 보틀을 판매해요.', 'company_1_2.png');
INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('지구샵', 101, '플라스틱을 사용하지 않는 생활용품을 판매해요.', 'company_1_3.png');
INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('송포어스', 101, '플라스틱을 사용하지 않는 친환경 생활용품을 판매해요.', 'company_1_4.png');
--INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('지구별가게', 101, '제로웨이스트를 위해 유기농 순면 소재의 제품을 판매해요.', 'company_1_5.png');

INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('하이트진로', 102, '주요 브랜드 총 21종에 `3단계 환경성적표지` 인증을 받았어요', 'company_2_1.png');
INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('포스코', 102, '생산하고 있는 전 제품군이 `환경성적표지` 인증을 받았어요', 'company_2_2.png');
INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('(주)기업과사람들', 102, '환경성적표지 인증을 받은 스틱핫도그 제품을 만들어요.', 'company_2_3.png');
INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('풀무원', 102, '국산콩두부 10종에 대해 영국 친환경 인증기관 Carbon Trust의 ‘탄소발자국’인증을 받았어요.', 'company_2_4.png');

INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('Melixir', 109, '높은 품질의 식물성 원료를 사용하여 지속적이고 건강한 제품을 만들어요.', 'company_3_1.png');
INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('씨젬므쥬르', 109, '글루텐까지 사용하지 않는 완전한 비건 레스토랑이에요.', 'company_3_2.png');
INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('발우공양', 109, '한국불교문화사업단에서 직접 운영하는 사찰음식 전문 레스토랑이에요.', 'company_3_3.png');
INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('몽크스부처', 109, '식물성 재료만을 사용하는 럭셔리 비건 레스토랑이에요.', 'company_3_4.png');

INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('아로마티카', 103, '지속가능하고 안전한 원료로 환경을 생각한 스킨케어 제품을 만들어요.', 'company_4_1.png');
INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('이너프프로젝트', 103, '낭비 없는 제품을 만드는 것을 목표로 클린뷰티 제품을 만들어요.', 'company_4_2.png');
INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('세럼카인드', 103, '동물실험을 하지 않는 세럼 전문 브랜드예요.', 'company_4_3.png');
INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('에코라운드', 103, '자연에서 얻은 원료로 자연주의 세제를 만들어요.', 'company_4_4.png');

INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('진짜 파스타', 104, '소방공무원, 결식아둥에게 무상으로 음식을 제공해요.', 'company_5_1.png');
INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('아재커피 종로구청점', 104, '결식아동들에게 동반 1인과 무상 커피를 마실 수 있도록 해요.', 'company_5_2.png');
INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('알티프로젝트카페', 104, '음료 한잔과 디저트를 결식아동들에게 무상제공해요.', 'company_5_3.png');
INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('엔플럼헤어', 104, '결식아동에게 커트를 무료로 제공해요.', 'company_5_4.png');

INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('정스팜', 105, '절임 식품의 숙련된 노하우를 위해 다수의 고령자들을 고용해요.', 'company_6_1.png');
INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('성심당', 105, '전통과자 제조 경력이 많은 고령자를 고용해요.', 'company_6_2.png');
INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('지엔티', 105, '직원의 약 40%이상을 고령자로 고용하여 가정간편식을 만들어요.', 'company_6_3.png');
INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('노노카페', 105, '실버바리스타를 양성하여실버 세대 일자리 창출을 도와요.', 'company_6_4.png');

INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('호텔 엘린', 106, '전체 직원의 반 이상이 근로장애인인 제주도의 숙박업소예요.', 'company_7_1.png');
INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('나는카페', 106, '발달장애청년을 바리스타로 두어 커피를 판매해요.', 'company_7_2.png');
INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('스위트위드', 106, '과자 포장, 운반 업무에 장애인을 고용하여 과자를 판매해요.', 'company_7_2.png');
INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('섬섬옥수', 106, '여성청각장애인들의 네일케어 서비스를 제공해요.', 'company_7_2.png');

INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('꿈드래 쇼핑몰', 107, '중증장애인들이 생산한 물건을 다양하게 판매해요.', 'company_8_1.png');
INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('마로원', 107, '정신질환이 있는 사람을 고용하여 물티슈, 종이컵, 보리빵 등을 판매해요.', 'company_8_2.png');
INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('씨앤비빌리지', 107, '정신질환이 있는 사람을 고용하여 쿠키를 판매해요.', 'company_8_3.png');
INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('히즈빈스', 107, '정신질환이 있는 사람들이 모여 카페를 운영합니다.', 'company_8_4.png');

INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('희망브리지', 108, '재해로부터 피해를 입은 사람들을 위해 성금을 집행하고 관리해요.', 'company_9_1.png');
INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('쓰리킹스인터내셔널', 108, '마스크 하나를 구입하면 하나의 마스크를 제3세계 어린이들에게 기부해요.', 'company_9_2.png');
INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('본죽', 108, '특정죽을 구매시 방글라데시 어린이들의 한끼 식사를 기부해요.', 'company_9_3.png');
INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('솜씨', 108, '유니세프 카드를 판매한 금액으로 위험에 처한 어린이들을 구합니다.', 'company_9_4.png');



/* 제휴회사 좋아요 기능 */
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('더피커', '1');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('더피커', '1');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('더피커', '1');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('더피커', '1');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('더피커', '1');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('더피커', '1');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('더피커', '1');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('더피커', '1');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('더피커', '1');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('더피커', '1');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('더피커', '1');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('더피커', '1');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('더피커', '1');

INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('보틀팩토리', '2');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('보틀팩토리', '2');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('보틀팩토리', '2');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('보틀팩토리', '2');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('보틀팩토리', '2');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('보틀팩토리', '2');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('보틀팩토리', '2');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('보틀팩토리', '2');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('보틀팩토리', '2');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('보틀팩토리', '2');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('보틀팩토리', '2');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('보틀팩토리', '2');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('보틀팩토리', '2');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('보틀팩토리', '2');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('보틀팩토리', '2');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('보틀팩토리', '2');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('보틀팩토리', '2');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('보틀팩토리', '2');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('보틀팩토리', '2');

INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구샵', '3');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구샵', '3');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구샵', '3');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구샵', '3');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구샵', '3');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구샵', '3');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구샵', '3');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구샵', '3');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구샵', '3');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구샵', '3');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구샵', '3');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구샵', '3');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구샵', '3');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구샵', '3');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구샵', '3');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구샵', '3');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구샵', '3');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구샵', '3');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구샵', '3');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구샵', '3');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구샵', '3');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구샵', '3');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구샵', '3');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구샵', '3');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구샵', '3');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구샵', '3');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구샵', '3');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구샵', '3');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구샵', '3');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구샵', '3');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구샵', '3');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구샵', '3');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구샵', '3');

INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('송포어스', '4');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('송포어스', '4');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('송포어스', '4');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('송포어스', '4');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('송포어스', '4');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('송포어스', '4');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('송포어스', '4');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('송포어스', '4');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('송포어스', '4');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('송포어스', '4');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('송포어스', '4');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('송포어스', '4');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('송포어스', '4');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('송포어스', '4');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('송포어스', '4');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('송포어스', '4');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('송포어스', '4');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('송포어스', '4');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('송포어스', '4');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('송포어스', '4');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('송포어스', '4');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('송포어스', '4');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('송포어스', '4');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('송포어스', '4');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('송포어스', '4');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('송포어스', '4');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('송포어스', '4');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('송포어스', '4');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('송포어스', '4');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('송포어스', '4');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('송포어스', '4');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('송포어스', '4');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('송포어스', '4');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('송포어스', '4');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('송포어스', '4');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('송포어스', '4');

INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구별가게', '5');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구별가게', '5');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구별가게', '5');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구별가게', '5');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구별가게', '5');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구별가게', '5');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구별가게', '5');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구별가게', '5');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구별가게', '5');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구별가게', '5');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구별가게', '5');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구별가게', '5');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구별가게', '5');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구별가게', '5');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구별가게', '5');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구별가게', '5');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구별가게', '5');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구별가게', '5');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구별가게', '5');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구별가게', '5');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구별가게', '5');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구별가게', '5');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구별가게', '5');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구별가게', '5');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구별가게', '5');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구별가게', '5');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구별가게', '5');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구별가게', '5');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구별가게', '5');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구별가게', '5');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구별가게', '5');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구별가게', '5');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구별가게', '5');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구별가게', '5');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구별가게', '5');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구별가게', '5');
INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구별가게', '5');

INSERT INTO COMPANY_LIKE (COMPANY_NAME, USER_NICKNAME) VALUES ('지구샵', '태호');