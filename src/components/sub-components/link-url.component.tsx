import React from 'react';
import { createStyles, makeStyles, Theme, Button, Icon } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  }),
);

export const LinkButtonComponent: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
      >
        Link
      </Button>
      </div>
  );
}
