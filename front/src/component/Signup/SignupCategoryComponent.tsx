import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Dialog,
    Typography,
} from '@material-ui/core';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import http from '../../http';
import { CurrentUserState, SignUpCategoryState } from '../../recoil/Session';
import { CategoryDataSet, CategoryStandInfo } from '../Category/DataModel';
import SelectList from '../Common/SelectList';
import { getCategoryNameFromId } from '../Common/util';
import { SignupComponentProps } from './DataModel';
import SignupCommonComponent from './SignupCommon';

interface SignupCategory {
    benefitCategoryList: Array<{ userNickname: string; categoryId: number }>;
}

interface ACDialogProps {
    open: boolean;
    onClose: () => void;
}

const LIMIT = 2;

type ACCCategoryDialogProps = ACDialogProps & {
    recommand: number[];
    nickName: string;
};

const ACCategoryDialog: React.FC<ACCCategoryDialogProps> = (
    props: ACCCategoryDialogProps
) => {
    const { onClose, open, nickName, recommand } = props;

    const handleOk = () => {
        onClose();
    };

    let str = '';

    recommand.forEach((eachData: number, index) => {
        str += getCategoryNameFromId(eachData);
        str += recommand.length - 1 !== index ? ', ' : ' ';
    });

    return (
        <Dialog onClose={handleOk} open={open}>
            <Card>
                <CardHeader
                    title={
                        <Typography className="txt_20 txt_b">
                            카테고리 추천
                        </Typography>
                    }
                />

                <CardContent>
                    <Typography
                        className="txt_14"
                        style={{ display: 'inline' }}
                    >
                        {nickName}님의 소비 패턴을 분석해보니
                    </Typography>
                    <Typography
                        className="txt_14"
                        style={{ display: 'inline', color: '#62C3EB' }}
                    >
                        {str}
                    </Typography>
                    <Typography
                        className="txt_14"
                        style={{ display: 'inline' }}
                    >
                        관련 소비가 많았어요! 해당 카테고리를 구독해보시는 것은
                        어떨까요?
                    </Typography>
                </CardContent>
                <CardActions
                    style={{ justifyContent: 'flex-end', paddingTop: 0 }}
                >
                    <Button
                        onClick={handleOk}
                        disableRipple
                        style={{ color: '#62C3EB' }}
                    >
                        확인 완료
                    </Button>
                </CardActions>
            </Card>
        </Dialog>
    );
};

const ACOverDialog: React.FC<ACDialogProps> = (props: ACDialogProps) => {
    const { onClose, open } = props;

    const handleOk = () => {
        onClose();
    };

    return (
        <Dialog onClose={handleOk} open={open}>
            <CardContent>
                <Typography>2가지의 카테고리만 선택 할 수 있어요.</Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'flex-end', paddingTop: 0 }}>
                <Button
                    onClick={handleOk}
                    disableRipple
                    style={{ color: '#62C3EB' }}
                >
                    확인 완료
                </Button>
            </CardActions>
        </Dialog>
    );
};

const SignupCategoryComponent: React.FC<SignupComponentProps> = (
    props: SignupComponentProps
) => {
    const [category, setCategory] = useRecoilState<CategoryDataSet[]>(
        SignUpCategoryState
    );

    const userInfo = useRecoilValue(CurrentUserState);

    const [suggestDialog, setSuggestDialog] = useState<boolean>(false);
    const [overDialog, setOverDialog] = useState<boolean>(false);

    const [recommand, setRecommand] = useState<number[]>([]);
    const buttonDisable = category.length !== 2;

    useEffect(() => {
        http.get(`/api/members/${userInfo.nickname}/category/recommend`).then(
            (res) => {
                const recommand = res.data.data.map((eachData: any) => {
                    return eachData.categoryId;
                });
                setRecommand(recommand);
                setSuggestDialog(true);
            }
        );
    }, []);

    console.log(userInfo);
    const selectData = (
        data: CategoryDataSet,
        event: ChangeEvent<HTMLInputElement>
    ) => {
        if (event.currentTarget.checked) {
            if (category.length < LIMIT) {
                setCategory([...category, data]);
            } else {
                setOverDialog(true);
            }
        } else {
            setCategory(category.filter((item) => data !== item));
        }
    };

    const onNextClick = (next: number) => {
        const data: SignupCategory = {
            benefitCategoryList: [],
        };

        category.forEach((eachData) => {
            data.benefitCategoryList.push({
                categoryId: eachData.id,
                userNickname: userInfo.nickname,
            });
        });
        http.post(`/api/members/category`, category).then((res) => {
            console.log(res);
            props.onMoveButtonClick(next);
        });
    };

    return (
        <div className="bg_gray5">
            <ACCategoryDialog
                nickName={userInfo.nickname}
                recommand={recommand}
                open={suggestDialog}
                onClose={() => {
                    setSuggestDialog(false);
                }}
            />
            <ACOverDialog
                open={overDialog}
                onClose={() => {
                    setOverDialog(false);
                }}
            />
            <SignupCommonComponent
                isLast={true}
                buttonDisable={buttonDisable}
                onMoveButtonClick={onNextClick}
            >
                <p className="txt_20">관심있는 카테고리 2가지를 골라</p>
                <p className="txt_20 txt_b">집중 혜택 받으세요.</p>

                <SelectList
                    selectData={category}
                    standardData={CategoryStandInfo}
                    onChange={selectData}
                />
            </SignupCommonComponent>
        </div>
    );
};

export default SignupCategoryComponent;
