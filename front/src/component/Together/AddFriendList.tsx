import {
    Box,
    Button,
    Divider,
    makeStyles,
    Typography,
} from '@material-ui/core';
import React from 'react';
import { UsedFriendSet } from './DataModel';

export interface AddFriendListProps {
    data: UsedFriendSet[];
    mode: 'USED' | 'NOTUSED';
    onClick?: (userInfo: UsedFriendSet) => void;
}

const useStyles = makeStyles(() => ({
    emptryString: {
        color: 'white',
    },
}));

const AddFriendList: React.FC<AddFriendListProps> = (
    props: AddFriendListProps
) => {
    const classes = useStyles();
    return (
        <>
            {props.data.map((data, index, arr) => {
                return (
                    <>
                        <Box key={data.name} display="flex" p="9px">
                            <Box>
                                <Typography className="txt_m txt_16">
                                    {data.name}
                                </Typography>
                                <Typography
                                    className={`${
                                        data.nickname
                                            ? 'txt_gray1'
                                            : classes.emptryString
                                    } txt_m txt_14`}
                                >
                                    {data.nickname ? data.nickname : 'emptry'}
                                </Typography>
                            </Box>
                            <Box flexGrow="1" />
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Button
                                    onClick={() =>
                                        props.onClick && props.onClick(data)
                                    }
                                    disabled={props.mode === 'NOTUSED'}
                                    className="btn_blueBorder txt_14"
                                >
                                    {props.mode === 'USED' ? '추가' : '초대'}
                                </Button>
                            </Box>
                        </Box>
                        {arr.length - 1 > index && <Divider />}
                    </>
                );
            })}
        </>
    );
};

export default AddFriendList;
