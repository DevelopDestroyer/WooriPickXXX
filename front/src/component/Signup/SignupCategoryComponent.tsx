import { Box, Button, Dialog, Typography } from '@material-ui/core';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { CurrentUserState, SignUpCategoryState } from '../../recoil/Session';
import { CategoryDataSet, CategoryStandInfo } from '../Category/DataModel';
import SelectList from '../Common/SelectList';
import { SignupComponentProps } from './DataModel';
import SignupCommonComponent from './SignupCommon';

interface ACDialogProps {
    open: boolean;
    onClose: () => void;
}

const LIMIT = 2;

const ACCategoryDialog: React.FC<ACDialogProps> = (props: ACDialogProps) => {
    const { onClose, open } = props;

    const handleOk = () => {
        onClose();
    };

    return (
        <Dialog onClose={handleOk} open={open}>
            <Box mt="15px" mx="15px">
                <Typography>니가원하는거슨 비건어쩌고저쩌고</Typography>
            </Box>
            <Box>
                <Button onClick={handleOk} className="p_btn_bottom txt_b">
                    확인
                </Button>
            </Box>
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
            <Box mt="15px" mx="15px">
                <Typography>딱 2가지만 선택해주세요</Typography>
            </Box>
            <Box>
                <Button onClick={handleOk} className="p_btn_bottom txt_b">
                    확인
                </Button>
            </Box>
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
    const buttonDisable = category.length !== 2;

    useEffect(() => {
        if (props.checkCurrent) {
        }
    }, []);

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

    return (
        <div className="bg_gray5">
            <ACCategoryDialog
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
                onMoveButtonClick={props.onMoveButtonClick}
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
