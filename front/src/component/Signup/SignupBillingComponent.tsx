import { Box, Button, Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import { SignupComponentProps } from './DataModel';
import SignupCommonComponent from './SignupCommon';

const SignupBillingComponent: React.FC<SignupComponentProps> = (
    props: SignupComponentProps
) => {
    return (
        <div className="bg_gray5">
            <SignupCommonComponent
                buttonDisable={false}
                onMoveButtonClick={props.onMoveButtonClick}
            >
                <p className="txt_20">혜택 구독을 위한</p>
                <p className="txt_20 txt_b">결제 정보를 입력해 주세요.</p>

                <Box mt="15px">
                    <p style={{ color: '#62c3eb' }}>
                        첫달 무료 이용 후 해지하실 수 있어요.
                    </p>
                </Box>

                <Box mt="25px">
                    <Card>
                        <CardContent>
                            <Box display="flex">
                                <Box flexGrow="1">
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        이름
                                    </Typography>
                                    <Typography variant="body1">
                                        이진영
                                    </Typography>
                                </Box>
                                <Button disabled className="btn_blueBorder">
                                    스캔하기
                                </Button>
                            </Box>

                            <Box mt="10px">
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                >
                                    카드번호
                                </Typography>
                                <Typography variant="body1">
                                    0123-4567-0123-4567
                                </Typography>
                            </Box>

                            <Box mt="10px">
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                >
                                    카드 유효기간
                                </Typography>
                                <Typography variant="body1">01/2345</Typography>
                            </Box>

                            <Box mt="10px">
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                >
                                    CVC
                                </Typography>
                                <Typography variant="body1">012</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
            </SignupCommonComponent>
        </div>
    );
};

export default SignupBillingComponent;
