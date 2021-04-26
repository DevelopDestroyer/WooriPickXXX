import { Box, Button, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useRecoilValue } from 'recoil';
import HeaderAction from '../component/Common/HeaderAction';
import { BenefitStateCompany } from '../recoil/Benefit';
const useStyles = makeStyles(() => ({
    dfColor: {
        color: 'white',
    },
    buttonLayout: {
        width: '80%',
        backgroundColor: '#3BAAD8',
        borderRadius: '0.5rem',
        flexBasis: 0,
        flexGrow: 1,
    },
}));

const BenefitCompanyPage: React.FC = () => {
    const { name } = useParams<any>();
    const classes = useStyles();
    const history = useHistory();
    const company = useRecoilValue(BenefitStateCompany);
    const [currentCompany, setCompany] = useState<BenefitCompany>(undefined);
    useEffect(() => {
        console.log(111);
    }, [company]);
    console.log(name);
    return (
        <div className="bg_gray5">
            <HeaderAction
                headerTitle={name}
                isLast={false}
                onMoveClick={() => {
                    history.goBack();
                }}
            >
                {name}
            </HeaderAction>

            <div className="div_rd_txt mg_t20">
                <p className="txt_20">{name}는</p>
                <p className="txt_20 txt_b">일회용품을 줄이기 위해</p>
                <p className="txt_20">지속가능한 생활 대안제품을 판매해요.</p>
            </div>

            <div className="box_div bg_wh pd_20 mg_t30">
                <p className="txt_20 txt_b">{name} 상품</p>
                <div className="mg_t30" style={{ width: '100%' }}>
                    <div
                        style={{
                            position: 'relative',
                            display: 'inline-block',
                            width: '48%',
                        }}
                    >
                        <img src="/images/product/product_1.png" />
                        <p className="txt_16">햄프코튼 다용도 타월</p>
                    </div>
                    <div
                        style={{
                            position: 'relative',
                            display: 'inline-block',
                            width: '48%',
                            marginLeft: '2%',
                        }}
                    >
                        <img src="/images/product/product_2.png" />
                        <p className="txt_16">천연라텍스 고무장갑</p>
                    </div>
                </div>
                <div className="mg_t30" style={{ width: '100%' }}>
                    <div
                        style={{
                            position: 'relative',
                            display: 'inline-block',
                            width: '48%',
                        }}
                    >
                        <img src="/images/product/product_3.png" />
                        <p className="txt_16">사이잘 빨대 세척솔</p>
                    </div>
                    <div
                        style={{
                            position: 'relative',
                            display: 'inline-block',
                            width: '48%',
                            marginLeft: '2%',
                        }}
                    >
                        <img src="/images/product/product_4.png" />
                        <p className="txt_16">다회용 밀랍 주방랩</p>
                    </div>
                </div>
                <Box my="30px" textAlign="center">
                    <Button
                        className={`${classes.buttonLayout} ${classes.dfColor}`}
                    >
                        상품 더 보러가기
                    </Button>
                </Box>
            </div>

            <div className="box_div bg_wh pd_20 mg_t30">
                <p className="txt_20 txt_b">{name} 후기</p>
                <img
                    className="mg_t20"
                    style={{ width: '100%' }}
                    src="/images/product/company_score.png"
                />
                <div className="line bg_gray3 mg_t20"></div>

                <p className="txt_12 txt_b mg_t20">
                    hayeon0908 / 닥터노아 마루 대나무 칫솔
                </p>
                <img
                    className="mg_t6"
                    style={{
                        height: '16px',
                        width: 'auto',
                        position: 'relative',
                        display: 'inline-block',
                    }}
                    src="/images/product/star_5.png"
                />
                <p
                    className="txt_12 txt_gray2 mg_l10"
                    style={{ position: 'relative', display: 'inline-block' }}
                >
                    2021.02.25
                </p>

                <p className="mg_t20 txt_14">
                    플라스틱 줄여야겠다고 생각해서 구매하게 되었어요! 여러 제품
                    써봤는데 이 대나무 칫솔이 제일 쓰기도 편하고 재질이 좋아요
                    ㅠㅠ 대나무 칫솔 쓰면 항상 입 안이 헐어서 고민이였는데 이
                    저품 쓰고 싹 사라졌어요~{' '}
                </p>
                <div className="scroll_wrap">
                    <img
                        className="mg_t10 mg_r10 review_img"
                        src="/images/product/product_review_1_1.png"
                    />
                    <img
                        className="mg_t10 mg_r10 review_img"
                        src="/images/product/product_review_1_2.png"
                    />
                </div>

                <div className="line bg_gray3 mg_t20"></div>

                <p className="txt_12 txt_b mg_t20">러빗88 / 유기농 면마스크</p>
                <img
                    className="mg_t6"
                    style={{
                        height: '16px',
                        width: 'auto',
                        position: 'relative',
                        display: 'inline-block',
                    }}
                    src="/images/product/star_5.png"
                />
                <p
                    className="txt_12 txt_gray2 mg_l10"
                    style={{ position: 'relative', display: 'inline-block' }}
                >
                    2020.08.15
                </p>

                <p className="mg_t20 txt_14">
                    마스크가 마감도 깔끔하고 끈도 튼튼해요~ 아무래도 아이가 많이
                    어리다보니 물고 빨고 할게 뻔한데, 항균, 무형광소재로
                    마들었다니 안심이 되더라구요. 무엇보다 좋은 자재들을 사용한
                    마스크라 더욱 믿음이 갑니다 추천합니다^^
                </p>
                <div className="scroll_wrap">
                    <img
                        className="mg_t10 mg_r10 review_img"
                        src="/images/product/product_review_2_1.png"
                    />
                    <img
                        className="mg_t10 mg_r10 review_img"
                        src="/images/product/product_review_2_2.png"
                    />
                    <img
                        className="mg_t10 mg_r10 review_img"
                        src="/images/product/product_review_2_3.png"
                    />
                    <img
                        className="mg_t10 mg_r10 review_img"
                        src="/images/product/product_review_2_4.png"
                    />
                </div>
                <Box my="30px" textAlign="center">
                    <Button
                        className={`${classes.buttonLayout} ${classes.dfColor}`}
                    >
                        후기 767개 전체보기
                    </Button>
                </Box>
            </div>
        </div>
    );
};

export default BenefitCompanyPage;
