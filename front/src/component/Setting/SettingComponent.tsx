import { Box, Divider, makeStyles, Typography } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import EmailIcon from '@material-ui/icons/Email';
import FeedbackIcon from '@material-ui/icons/Feedback';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import React from 'react';
import HeaderDeafault from '../Common/HeaderDefault';
import SettingBenefit from './SettingBenefit';
import SettingStatus from './SettingStatus';

const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    containerOuter: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: '13px',
        paddingBottom: '13px',
    },
    iconSize: {
        fontSize: '1.5rem !important',
    },
}));

const SettingComponent: React.FC = () => {
    const classes = useStyles();
    return (
        <div className="bg_gray5">
            <HeaderDeafault icon={<SettingsIcon />} title="마이 페이지" />
            <Box mx="1rem" overflow="hiddne">
                <Box mt="1rem">
                    <SettingStatus />
                </Box>
                <Box mt="1rem">
                    <SettingBenefit />
                </Box>
                <Box display="flex" flexDirection="column">
                    <Box className={classes.containerOuter}>
                        <Box className={classes.container}>
                            <PersonIcon className={classes.iconSize} />
                        </Box>
                        <Box className={classes.container}>
                            <Typography className="mg_l10 txt_16">
                                홈
                            </Typography>
                        </Box>
                        <Box flexGrow="1" />
                        <ChevronRightIcon />
                    </Box>
                    <Divider />
                    <Box className={classes.containerOuter}>
                        <Box className={classes.container}>
                            <CheckCircleIcon className={classes.iconSize} />
                        </Box>
                        <Box className={classes.container}>
                            <Typography className="mg_l10 txt_16">
                                구독 관리
                            </Typography>
                        </Box>
                        <Box flexGrow="1" />
                        <ChevronRightIcon />
                    </Box>
                    <Divider />
                    <Box className={classes.containerOuter}>
                        <Box className={classes.container}>
                            <FeedbackIcon className={classes.iconSize} />
                        </Box>
                        <Box className={classes.container}>
                            <Typography className="mg_l10 txt_16">
                                공지사항
                            </Typography>
                        </Box>
                        <Box flexGrow="1" />
                        <ChevronRightIcon />
                    </Box>
                    <Divider />
                    <Box className={classes.containerOuter}>
                        <Box className={classes.container}>
                            <EmailIcon className={classes.iconSize} />
                        </Box>
                        <Box className={classes.container}>
                            <Typography className="mg_l10 txt_16">
                                문의하기
                            </Typography>
                        </Box>
                        <Box flexGrow="1" />
                        <ChevronRightIcon />
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default SettingComponent;
