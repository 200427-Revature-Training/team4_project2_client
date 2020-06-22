/*
    Form Information 
        - Name of Event
        - Date(s) of Event
        - Image Container
        - Description of Event
        - Event Capacity
        - Price Selection
        - Location of Event
            - Address
            - State
            - City
            - Zip Code
*/

import React from 'react'
import { makeStyles, Theme, createStyles, TextField } from "@material-ui/core";
import {} from '@material-ui/icons';
import { ImageUploadButton } from './image-component';
import { AddressComponent } from './address-component';
import { DatePickerComponent } from './date-component';
import { PricePickerComponent, CapacityPickerComponent } from './picker-component';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);
export const EventRegisterComponent: React.FC = () => {

    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                        required
                        id="outlined-full-width"
                        label="Name of Event"
                        style={{ margin: 8 }}
                        helperText="ex. Pokemon Tournament"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                    }}
                        variant="outlined"
                />
                <DatePickerComponent />
                <ImageUploadButton />
                <TextField
                        id="outlined-full-width"
                        label="Description of Event"
                        style={{ margin: 8 }}
                        helperText="ex. Come and Join...."
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                    }}
                        variant="outlined"
                />
                <AddressComponent />
                <PricePickerComponent />
                <CapacityPickerComponent />
            </div>
        </form>
    );
};