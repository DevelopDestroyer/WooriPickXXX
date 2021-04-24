import { Button, makeStyles } from '@material-ui/core';
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

const SigninPage: React.FC = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const onClickSignup = () => {
        history.push('/signup');
    };

    const postMessage = (event: any) => {
        event.preventDefault();
        console.log(`Post Message Called`);
        if (window && window.parent) {
            console.log(`Post Send`);
            window.parent.postMessage('child;;;requestPhoneNumber', '*');
        }
    };

    return (
        <>
            <Button onClick={postMessage} style={{ display: 'absolute' }}>
                IFrame Message Test
            </Button>
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
                    <Button
                        onClick={onClickSignup}
                        className={classes.button}
                        style={{ backgroundColor: 'white', height: '55px' }}
                    >
                        <p className="txt_primaryBlue txt_center txt_b">
                            혜택통 첫달 무료 체험하기
                        </p>
                    </Button>

                    <Button
                        className={`mg_t10 ${classes.button}`}
                        style={{ border: '1px solid white', height: '55px' }}
                    >
                        <p className="txt_wh txt_center">기존 사용자 로그인</p>
                    </Button>
                </div>
            </div>
        </>
    );
};

export default SigninPage;
