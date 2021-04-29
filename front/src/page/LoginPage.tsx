import { IconButton, makeStyles } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';

const useStyles = makeStyles(() => ({
    imgContainer: {
        width: '100px',
    },
    button: {
        display: 'block',
        width: '100%',
    },
    bodyReplace: {
        zIndex: -1,
        position: 'fixed',
        width: '100%',
        height: '100%',
    },
}));

const LoginPage: React.FC = () => {
    const classes = useStyles();
    const history = useHistory();
    const onClickGoMain = () => {
        history.replace('/homepage');
    };

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

                <div className="fingerprint_div">
                    <p className="txt_center">
                        <IconButton onClick={onClickGoMain}>
                            <img
                                className="fingerprint_icon"
                                src="/images/Fingerprint.png"
                            />
                        </IconButton>
                    </p>
                    <p className="txt_16 txt_wh txt_center mg_t10">
                        로그인을 위해
                        <br />
                        지문으로 인증해주세요.
                    </p>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
