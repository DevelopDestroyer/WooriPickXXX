import React, { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import { GivingSelectState } from '../../recoil/Giving';
import SelectList from '../Common/SelectList';
import { CommonInterface, GivingDataSet, GivingStandInfo } from './DataModel';
import GivingCommon from './GivingCommon';

const GivingSelectComponent: React.FC<CommonInterface> = ({
    index,
    onMoveClick,
}: CommonInterface) => {
    const [givingData, setGivingData] = useRecoilState(GivingSelectState);

    const onChange = (
        data: GivingDataSet,
        event: ChangeEvent<HTMLInputElement>
    ) => {
        console.log('Clicked');
        if (event.currentTarget.checked) {
            setGivingData([data]);
        } else {
            setGivingData([]);
        }
    };
    console.log(givingData);
    return (
        <GivingCommon
            headerTitle="기부하기"
            isLast={false}
            buttonDisable={givingData.length === 0}
            onMoveClick={(nextMove: number) => {
                onMoveClick(index + nextMove);
            }}
            buttonTitle="다음"
        >
            <p className="txt_20">관심있는 카테고리 하나를 골라</p>
            <p className="txt_20 txt_b">기부하세요.</p>
            <SelectList
                selectData={givingData}
                standardData={GivingStandInfo}
                onChange={onChange}
            />
        </GivingCommon>
    );
};

export default GivingSelectComponent;
