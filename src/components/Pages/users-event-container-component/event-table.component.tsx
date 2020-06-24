import React from 'react'
import { makeStyles, TableContainer, Paper, 
    Table, TableHead, TableRow, TableCell, 
    TableBody } from '@material-ui/core';
import { StarsRating } from '../../sub-components/star-ratings.component';
import { LinkButtonComponent } from '../../sub-components/link-url.component';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  

  
  function createData(name: string, calories: string, fat: string, carbs: string) {
    return { name, calories, fat, carbs};
  }
  
  const rows = [
    createData('Frozen yoghurt', '6/5 - 6/7', 'New Orleans, LA', 'eventbrite.com'),
    createData('Ice cream sandwich', '7/5 - 7/8', 'Bronx, NYC, NY', 'brooklyn.nyc.com'),
    createData('Eclair', '10/10 - 10/15', 'USF, Tampa, FL', 'usf.edu'),
    createData('Cupcake', '11/2', 'Columbus, OH', 'deltaphi.org'),
    createData('Gingerbread', '2/14/2021', 'Seattle, WA', 'chops.wa'),
  ];
  
  export const TableOfEventsComponent: React.FC = () => {
    const classes = useStyles();
  
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Events:</TableCell>
              <TableCell align="center">Date:</TableCell>
              <TableCell align="center">Location:</TableCell>
              <TableCell align="center">Link:</TableCell>
              <TableCell align="center">Ratings</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.calories}</TableCell>
                <TableCell align="center">{row.fat}</TableCell>
                <TableCell align="center">{<LinkButtonComponent />}</TableCell>
                <TableCell align="center">{<StarsRating />}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }