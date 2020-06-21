import React, { useState } from 'react'
import { TextField, MenuItem, 
    createStyles, makeStyles, Theme, InputAdornment } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';


const prices = [
  {
    value: '29.99 - 49.99',
    label: 'Basic',
  },
  {
    value: '59.99 - 79.99',
    label: 'Intermediate',
  },
  {
    value: '89.99 - 115.99',
    label: 'Pro',
  },
  {
    value: '120.99 - 149.99',
    label: 'VIP',
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      margin: {
        margin: theme.spacing(1),
      },
      withoutLabel: {
        marginTop: theme.spacing(3),
      },
      textField: {
        width: '25ch',
      }
  })
);

export const PricePickerComponent: React.FC = () => {

    const classes = useStyles();
    const [price, setPrice] = useState('EUR');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPrice(event.target.value);
    };
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                    id="filled-select-currency"
                    select
                    label="Select"
                    value={price}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>
                      }}
                    onChange={handleChange}
                    helperText="Please select your currency"
                    variant="filled"
                    >
                    {prices.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
        </form>
    );
};


const capacities = [
  {
    value: '10 - 50',
    label: 'Basic',
  },
  {
    value: '51 - 100',
    label: 'Intermediate',
  },
  {
    value: '101 - 200',
    label: 'Pro',
  },
  {
    value: '201+',
    label: 'Overload',
  },
];
export const CapacityPickerComponent: React.FC = () => {

  const classes = useStyles();
  const [capacity, setCapacity] = useState('EUR');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCapacity(event.target.value);
  };
  return (
      <form className={classes.root} noValidate autoComplete="off">
          <div>
              <TextField
                  id="filled-select-currency"
                  select
                  label="Select"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    )
                  }}
                  value={capacity}
                  onChange={handleChange}
                  helperText="Please select your currency"
                  variant="filled"
                  >
                  {capacities.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                      {option.label}
                      </MenuItem>
                  ))}
              </TextField>
          </div>
      </form>
  );
};