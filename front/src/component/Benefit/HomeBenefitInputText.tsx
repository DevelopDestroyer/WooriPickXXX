import { IconButton, makeStyles, Paper } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        marginRight: '5%',
        marginLeft: '5%',
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    img: {
        width: '1rem',
        height: '1rem',
        margin: '0.5rem',
    },
}));

export interface HomeBenefitInputTextProps {
    inputText: string;
    onChange: (value: string) => void;
}

const HomeBenefitInputText: React.FC<HomeBenefitInputTextProps> = (
    props: HomeBenefitInputTextProps
) => {
    const classes = useStyles();

    return (
        <Paper component="form" className={classes.root}>
            <img className={classes.img} src="/images/ICON_Search.png" />
            <InputBase
                onKeyPress={(e) => {
                    e.key === 'Enter' && e.preventDefault();
                }}
                className={classes.input}
                value={props.inputText}
                onChange={(event) => {
                    props.onChange(event.target.value);
                }}
                placeholder="기업이나 제품들을 검색하세요."
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            {props.inputText.length > 0 && (
                <IconButton
                    onClick={() => {
                        props.onChange('');
                    }}
                >
                    <img
                        className={classes.img}
                        src="/images/ICON_Close_Button.png"
                    />
                </IconButton>
            )}
        </Paper>
    );
};

export default HomeBenefitInputText;
