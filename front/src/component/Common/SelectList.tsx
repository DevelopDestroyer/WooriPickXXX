import { Checkbox, FormControlLabel, makeStyles } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import React, { ChangeEvent } from 'react';
const useStyles = makeStyles({
    root: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    margin: {
        marginLeft: '5px',
    },
    icon: {
        color: '#62C3EB',
        fontSize: '1.5rem',
    },
});

export interface CategoryDataInfo {
    id: number;
    name: string;
}

interface SelectListProps {
    standardData: CategoryDataInfo[];
    selectData: CategoryDataInfo[];
    onChange: (
        data: CategoryDataInfo,
        event: ChangeEvent<HTMLInputElement>
    ) => void;
}

const SelectList: React.FC<SelectListProps> = (props: SelectListProps) => {
    const classes = useStyles();
    return (
        <>
            {props.standardData.map((eachData) => {
                return (
                    <div
                        key={eachData.id}
                        className="box_div mg_t20 bg_wh height_80"
                    >
                        <FormControlLabel
                            style={{ display: 'flex' }}
                            className="checkbox__label pd_t26 pd_l20"
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
                                        props.selectData.findIndex(
                                            (select) =>
                                                select.id === eachData.id
                                        ) >= 0
                                    }
                                    onChange={(event) => {
                                        props.onChange(eachData, event);
                                    }}
                                />
                            }
                            classes={{ label: classes.margin }}
                            label={eachData.name}
                        />
                    </div>
                );
            })}
        </>
    );
};

export default SelectList;
