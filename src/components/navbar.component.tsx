import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import "./navbar.component.css";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(8),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export const NavBarComponent: React.FC = () => {
  const classes = useStyles();
  const [viewChange, setViewChange]= useState(false)




  const isAuthenticated = localStorage.getItem("accessToken");

  useEffect(() => {
    loggedIn();
  }, []);

const loggedIn = () =>{
  if (isAuthenticated){
    setViewChange(true)
  }
}


  const endSession = () => {
    localStorage.removeItem("accessToken");
    setViewChange(false);
  };

  return (
    <div>
      <AppBar position="static" id="navbar-custom">
        <Toolbar>
          <Link to="/" id="nav-links">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
            >
              <Typography variant="h6" className={classes.title} id="logo">
                City Pop
              </Typography>
            </IconButton>
          </Link>
          <Typography variant="h6" className={classes.title} id="logo">
          Keep The Fun Going
          </Typography>
          <Link to="/searchevent" id="nav-buttons">
            <Button color="inherit" id="nav-buttons">
              Events
            </Button>
          </Link>
          <div hidden={viewChange}>
            <Link to="/login" id="nav-links">
              <Button color="inherit" id="nav-buttons">
                Login
              </Button>
            </Link>

            <Link to="/signup" id="nav-links">
              <Button color="inherit" id="nav-buttons">
                SignUp
              </Button>
            </Link>
          </div>{" "}
          :
          <div hidden={!viewChange}>
            <Link to="/feed" id="nav-links">
              <Button color="inherit" id="nav-buttons">
                Feed
              </Button>
            </Link>

            <Link to="/" id="nav-links">
              <Button
                color="inherit"
                id="nav-buttons"
                onClick={() => endSession()}
              >
                Log Out
              </Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
