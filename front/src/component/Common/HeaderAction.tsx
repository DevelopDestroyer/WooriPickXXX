import {
    BottomNavigation,
    BottomNavigationAction,
    makeStyles,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';
import StorefrontIcon from '@material-ui/icons/Storefront';
import React from 'react';

const useStyles = makeStyles(() => ({
    defaultType: {
        fontFamily: '"Noto Sans KR", sans-serif',
    },
    selectedType: {
        color: '#62c3eb',
    },
}));

export enum DISPLAY_TYPE {
    HOME,
    BENEFIT,
    TOGETHER,
    SETTING,
}

interface BottomBarNavProps {
    current: DISPLAY_TYPE;
    onChange: (clickType: DISPLAY_TYPE) => void;
}

const BottomBarNav: React.FC<BottomBarNavProps> = (
    props: BottomBarNavProps
) => {
    const classes = useStyles();

    const handleChange = (
        event: React.ChangeEvent<any>,
        newValue: DISPLAY_TYPE
    ) => {
        props.onChange(newValue);
    };

    return (
        <BottomNavigation
            value={props.current}
            onChange={handleChange}
            showLabels={true}
        >
            <BottomNavigationAction
                classes={{
                    selected: classes.selectedType,
                    label: classes.defaultType,
                }}
                label="홈"
                value={DISPLAY_TYPE.HOME}
                icon={<HomeIcon classes={{}} />}
            />
            <BottomNavigationAction
                classes={{
                    selected: classes.selectedType,
                    label: classes.defaultType,
                }}
                label="혜택찾기"
                value={DISPLAY_TYPE.BENEFIT}
                icon={<StorefrontIcon />}
            />
            <BottomNavigationAction
                classes={{
                    selected: classes.selectedType,
                    label: classes.defaultType,
                }}
                label="투게더"
                value={DISPLAY_TYPE.TOGETHER}
                icon={<PeopleIcon />}
            />
            <BottomNavigationAction
                classes={{
                    selected: classes.selectedType,
                    label: classes.defaultType,
                }}
                label="My"
                value={DISPLAY_TYPE.SETTING}
                icon={<SettingsIcon />}
            />
        </BottomNavigation>
    );
};

export default BottomBarNav;
