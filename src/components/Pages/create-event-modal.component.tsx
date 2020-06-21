import React from 'react'
import { DialogContent, Button, Dialog, DialogTitle,
    DialogActions } from '@material-ui/core';
import {} from '@material-ui/icons';
import { EventRegisterComponent } from '../sub-components/form-component';

export const CreateEventModal: React.FC = () => {
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    return (
        <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Create New Event
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <EventRegisterComponent />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    );
};