import { Box } from '@material-ui/core';
import React from 'react';
import { FriendDataSet } from './DataModel';

export interface AddFriendListProps {
    data: FriendDataSet[];
    mode: 'USED' | 'NOTUSED';
}

const AddFriendList: React.FC<AddFriendListProps> = (
    props: AddFriendListProps
) => {
    return (
        <>
            {props.data.map((data) => {
                return <Box key={data.name}>{data.name}</Box>;
            })}
        </>
    );
};

export default AddFriendList;
