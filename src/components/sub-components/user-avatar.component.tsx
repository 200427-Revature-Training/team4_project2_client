import React from 'react'
import { makeStyles, Theme, createStyles, Avatar } from '@material-ui/core';
import { deepOrange } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
      width: theme.spacing(9),
      height: theme.spacing(9),
      fontSize: 50
    },
  }),
);

export const FallbackAvatars: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="User Profile" src="/broken-image.jpg" className={classes.orange}>
        U
      </Avatar>
    </div>
  );
}