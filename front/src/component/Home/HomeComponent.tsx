import HomeIcon from '@material-ui/icons/Home';
import React from 'react';
import HeaderDeafault from '../Common/HeaderDefault';

const HomeComponent: React.FC = () => {
    return (
        <>
            <HeaderDeafault icon={<HomeIcon />} title="홈" />
        </>
    );
};

export default HomeComponent;
