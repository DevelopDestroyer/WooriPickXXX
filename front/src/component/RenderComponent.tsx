import React from 'react';
import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles((theme) => ({
  button: {
    height: '7%',
    width: '100%',
    margin: 0,
    backgroundColor: '#62C3EB',
  },
}));

export interface RenderComponentProps {
  title: { first: string; second: string };
  description: string[];
  highLight: string;
  imgUrl: string;
}

type innerInterface = RenderComponentProps & { isFirst: boolean } & {
  nextClick: () => void;
  backClick: () => void;
};

const RenderComponent: React.FC<innerInterface> = (props: innerInterface) => {
  const classes = useStyles();
  return (
    <Box height={'100%'}>
      <AppBar
        position="relative"
        style={{
          backgroundColor: '#ffffff',
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          {!props.isFirst && (
            <IconButton edge="start" onClick={() => props.backClick()}>
              <ArrowBackIosIcon style={{ color: '#000000' }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
      >
        <Grid>
          <Box>
            <Typography>{props.title.first}</Typography>
            <Typography>{props.title.second}</Typography>
          </Box>
        </Grid>
        <Grid>
          <Box>
            {props.description.map((eachDescription) => {
              return (
                <Typography key={eachDescription}>{eachDescription}</Typography>
              );
            })}
          </Box>
        </Grid>
        <Box>
          <Typography>{props.highLight}</Typography>
        </Box>
        <Box>Images</Box>
        <Grid>
          <Button className={classes.button} onClick={() => props.nextClick()}>
            <Typography>다음</Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RenderComponent;
