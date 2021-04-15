import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import { useSetRecoilState } from 'recoil';
import { IsLoginState } from '../recoil/Session';

const useStyles = makeStyles(() => ({
    imgContainer: {
        width: '100px',
    },
    bodyReplace: {
        zIndex: -1,
        position: 'fixed',
        width: '100%',
        height: '100%',
    },
}));

const SigninPage: React.FC = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const setIsLogin = useSetRecoilState(IsLoginState);

    return (
        <>
            <div className={`bg_primaryblue ${classes.bodyReplace}`} />
            <div className="container">
                <div className="div_rd_txt pd_t60">
                    <p className="txt_center">
                        <img
                            style={{ width: '100px' }}
                            className={`pd_t130 ${classes.imgContainer}`}
                            src="images/Logo.png"
                        />
                    </p>
                    <p className="txt_24 txt_wh txt_center">환영합니다!</p>
                </div>

                <div className="login_btn">
                    <a href="0.2_join_1.html">
                        <div
                            style={{ backgroundColor: 'white', height: '55px' }}
                        >
                            <p className="txt_primaryBlue txt_center pd_t16 txt_b">
                                혜택통 첫달 무료 체험하기
                            </p>
                        </div>
                    </a>
                    <div
                        className="mg_t10"
                        style={{ border: '1px solid white', height: '55px' }}
                    >
                        <p className="txt_wh txt_center pd_t16">
                            기존 사용자 로그인
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SigninPage;
