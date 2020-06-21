import React from 'react'
import { makeStyles, Theme, 
    createStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
  }),
);

export const AddressComponent: React.FC = () => {
    
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                    id="outlined-full-width"
                    label="Address"
                    style={{ margin: 8 }}
                    helperText="ex. 1234 Main Strreet"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                }}
                    variant="outlined"
                />
                <TextField
                    label="City"
                    id="outlined-margin-normal"
                    defaultValue="Default Value"
                    className={classes.textField}
                    helperText="ex. New Orleans"
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    label="State"
                    id="outlined-margin-normal"
                    defaultValue="Default Value"
                    className={classes.textField}
                    helperText="ex. New York"
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    label="Zip Code"
                    id="outlined-margin-normal"
                    defaultValue="Default Value"
                    className={classes.textField}
                    helperText="ex. 86138-1328"
                    margin="normal"
                    variant="outlined"
                />
            </div>
        </form>
    );
};

