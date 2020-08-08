import React, { useState, useContext } from 'react'
import { IconButton, Dialog, Button } from '@material-ui/core/'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { AuthContext } from '../contexts/authContext';
import { Link } from 'react-router-dom';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
  
export default function Signout({ setCheckLogin }) {
  const [open, setOpen] = useState(false);
  const { logout } = useContext(AuthContext)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function handleSubmit(event) {
    logout()
    handleClose()
    event.preventDefault();
    setCheckLogin(true)
  }

  return (
    <div>
      <IconButton variant="contained" color="inherit"  onClick={handleClickOpen}>
        Sign Out
      </IconButton>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Confirm Logout"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to signout?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="secondary">
            <Link to='/'>
            Confirm
            </Link>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
