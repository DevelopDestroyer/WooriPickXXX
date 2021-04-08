import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
import Counter from "../component/Counter";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Signin = () => {
    const classes = useStyles()
    return (
        <>
            <form noValidate autoComplete="off" className={classes.root}>
                <TextField id="standard-basic" label="Standard" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <Button variant="contained" color="primary">로그인</Button>
                <Button variant="contained" color="primary">회원 가입</Button>
            </form>
            <Counter />
        </>
        
    );
};

export default Signin
