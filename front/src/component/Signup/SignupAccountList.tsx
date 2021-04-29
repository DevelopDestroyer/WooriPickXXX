import {
    Box,
    Checkbox,
    FormControlLabel,
    Grid,
    makeStyles,
    Typography,
} from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import React, { ChangeEvent } from 'react';
import LoaderComponent from '../Common/LoaderComponent';
import { getMoneyStr2Number, getNumberString } from '../Common/util';
import { SignupAccountInterface } from './DataModel';

const useStyles = makeStyles({
    labelLayout: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        paddingTop: 0,
        marginLeft: '5px',
    },
    icon: {
        color: '#62C3EB',
        fontSize: '1.5rem',
    },
});

const AccountComponent: React.FC<SignupAccountInterface> = (
    props: SignupAccountInterface
) => {
    return (
        <Box display="flex" flexDirection="column">
            <Grid>
                <Typography>계좌번호: {props.ACNO}</Typography>
            </Grid>
            <Grid>
                <Typography>
                    잔액: {getNumberString(getMoneyStr2Number(props.PBOK_BAL))}
                </Typography>
            </Grid>
        </Box>
    );
};

export interface SignupAccountListProps {
    isLoaded: boolean;
    originData: SignupAccountInterface[];
    selectedData: SignupAccountInterface[];
    onChange(
        data: SignupAccountInterface,
        event: ChangeEvent<HTMLInputElement>
    ): void;
}

const SignupAccountList: React.FC<SignupAccountListProps> = (
    props: SignupAccountListProps
) => {
    const classes = useStyles();

    if (!props.isLoaded) {
        return <LoaderComponent color="#62C3EB" />;
    }

    return (
        <>
            {props.originData.map((eachData) => {
                return (
                    <div
                        key={eachData.ACNO}
                        className="box_div mg_t20 bg_wh height_80"
                    >
                        <FormControlLabel
                            style={{ display: 'flex' }}
                            className="checkbox__label pd_l20"
                            control={
                                <Checkbox
                                    checkedIcon={
                                        <CheckCircleOutlineIcon
                                            className={classes.icon}
                                        />
                                    }
                                    icon={
                                        <RadioButtonUncheckedIcon
                                            className={classes.icon}
                                        />
                                    }
                                    color="primary"
                                    checked={
                                        props.selectedData.findIndex(
                                            (select) =>
                                                select.ACNO === eachData.ACNO
                                        ) >= 0
                                    }
                                    onChange={(event) =>
                                        props.onChange(eachData, event)
                                    }
                                />
                            }
                            classes={{ root: classes.labelLayout }}
                            label={<AccountComponent {...eachData} />}
                        />
                    </div>
                );
            })}
        </>
    );
};

export default SignupAccountList;
