INSERT INTO MEMBER (NAME, NICKNAME, PASSWORD, PHONE_NUMBER, ACCOUNT_NUMBER, ACCOUNT_MONEY, POINT) VALUES('이태호', '태호', '000000', '010-1111-1234', '1004-100-12345', 500000, 85000);
INSERT INTO MEMBER (NAME, NICKNAME, PASSWORD, PHONE_NUMBER, ACCOUNT_NUMBER, ACCOUNT_MONEY, POINT) VALUES('이진영', '진영', '000000', '010-2222-1234', '1005-100-12345', 500000, 90000);
INSERT INTO MEMBER (NAME, NICKNAME, PASSWORD, PHONE_NUMBER, ACCOUNT_NUMBER, ACCOUNT_MONEY, POINT) VALUES('최서진', '서진', '000000', '010-3333-1234', '1006-100-12345', 500000, 95000);
INSERT INTO MEMBER (NAME, NICKNAME, PASSWORD, PHONE_NUMBER, ACCOUNT_NUMBER, ACCOUNT_MONEY, POINT) VALUES('성정민', '정민', '000000', '010-4444-1234', '1007-100-12345', 500000, 80000);

INSERT INTO MEMBER (NAME, NICKNAME, PASSWORD, PHONE_NUMBER, ACCOUNT_NUMBER, ACCOUNT_MONEY, POINT) VALUES('위사랑', '사랑', '000000', '010-5555-1234', '1007-100-12345', 200000, 110000);

INSERT INTO FRIEND (USER_NICKNAME, FRIEND_NICKNAME) VALUES('태호', '정민');
INSERT INTO FRIEND (USER_NICKNAME, FRIEND_NICKNAME) VALUES('태호', '진영');
INSERT INTO FRIEND (USER_NICKNAME, FRIEND_NICKNAME) VALUES('진영', '서진');
INSERT INTO FRIEND (USER_NICKNAME, FRIEND_NICKNAME) VALUES('사랑', '태호');

INSERT INTO BENEFIT_CATEGORY (USER_NICKNAME, CATEGORY_ID) VALUES ('태호', 101);
INSERT INTO BENEFIT_CATEGORY (USER_NICKNAME, CATEGORY_ID) VALUES ('태호', 102);
INSERT INTO BENEFIT_CATEGORY (USER_NICKNAME, CATEGORY_ID) VALUES ('정민', 103);
INSERT INTO BENEFIT_CATEGORY (USER_NICKNAME, CATEGORY_ID) VALUES ('정민', 104);
INSERT INTO BENEFIT_CATEGORY (USER_NICKNAME, CATEGORY_ID) VALUES ('진영', 105);
INSERT INTO BENEFIT_CATEGORY (USER_NICKNAME, CATEGORY_ID) VALUES ('진영', 106);
INSERT INTO BENEFIT_CATEGORY (USER_NICKNAME, CATEGORY_ID) VALUES ('서진', 105);
INSERT INTO BENEFIT_CATEGORY (USER_NICKNAME, CATEGORY_ID) VALUES ('서진', 106);
INSERT INTO BENEFIT_CATEGORY (USER_NICKNAME, CATEGORY_ID) VALUES ('사랑', 101);
INSERT INTO BENEFIT_CATEGORY (USER_NICKNAME, CATEGORY_ID) VALUES ('사랑', 102);

INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, TOTAL_ACCOUNT_MONEY, CATEGORY_ID, POINT, DATE) VALUES ('정민', 'DONATION', 5000, 201, -10000, '2021-03-02');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, TOTAL_ACCOUNT_MONEY, CATEGORY_ID, POINT, DATE) VALUES ('서진', 'DONATION', 5000, 201, -20000, '2021-03-03');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, TOTAL_ACCOUNT_MONEY, CATEGORY_ID, POINT, DATE) VALUES ('태호', 'DONATION', 400000, 201, -10000, '2021-04-15');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, TOTAL_ACCOUNT_MONEY, CATEGORY_ID, POINT, DATE) VALUES ('태호', 'WITHDRAW', 350000, -1, -5000, '2021-04-15');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, TOTAL_ACCOUNT_MONEY, CATEGORY_ID, POINT, DATE) VALUES ('진영', 'DONATION', 500000, 202, -30000, '2021-04-15');

INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, TOTAL_ACCOUNT_MONEY, CATEGORY_ID, POINT, DATE) VALUES ('태호', 'BENEFIT', 10000, 101, 100000, '2021-02-23');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, TOTAL_ACCOUNT_MONEY, CATEGORY_ID, POINT, DATE) VALUES ('태호', 'BENEFIT', 10000, 101, 123450, '2021-03-15');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, TOTAL_ACCOUNT_MONEY, CATEGORY_ID, POINT, DATE) VALUES ('태호', 'BENEFIT', 10000, 101, 3000, '2021-04-15');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, TOTAL_ACCOUNT_MONEY, CATEGORY_ID, POINT, DATE) VALUES ('태호', 'BENEFIT', 10000, 101, 3000, '2021-04-17');

INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, TOTAL_ACCOUNT_MONEY, CATEGORY_ID, POINT, DATE) VALUES ('사랑', 'BENEFIT', 10000, 101, 5000, '2021-04-15');
INSERT INTO TRADING_LEDGER (USER_NICKNAME, TRADING_TYPE, TOTAL_ACCOUNT_MONEY, CATEGORY_ID, POINT, DATE) VALUES ('사랑', 'BENEFIT', 10000, 101, 5000, '2021-04-17');

INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('더피커', 101, '건강한 자원의 순환을 위해 지속가능한 생활 대안 제품 판매', '/images/company/1.png');
INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('보틀팩토리', 101, '일회용품을 줄이기 위한 텀블러 테이크아웃 서비스 제공', '/images/company/2.png');
INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('지구샵', 101, '낭비 없는 소비를 위한 생필품 및 식품 판매', '/images//company/3.png');
INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('송포어스', 101, '제로웨이스트를 위한 상품 판매와 비건 카페를 동시 운영', '/images/company/4.jpg');
INSERT INTO COMPANY (COMPANY_NAME, CATEGORY_ID, DESCRIPTION, THUMB_NAIL_PATH) VALUES ('지구별가게', 101, '다회용품 브랜드 `소락`이 만든 제로웨이스트 제품 판매', '/images/company/5.jpg');

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