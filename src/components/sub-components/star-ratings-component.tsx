import React from 'react'
import { Rating } from '@material-ui/lab';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      '& > * + *': {
        marginTop: theme.spacing(1),
      },
    },
  }),
);

export const StarsRating: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating name="size-small" defaultValue={2} size="small" />
    </div>
  );
}