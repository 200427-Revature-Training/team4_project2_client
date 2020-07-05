import React, { useState } from "react";
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
  const isLoggedIn = false;
  const [user, setUser] = useState("");

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
                TempestSociety
              </Typography>
            </IconButton>
          </Link>
          <Typography variant="h6" className={classes.title} id="logo">
            {user != "" ? `Welcome ${user}` : "PlaceHolder for user's name"}
          </Typography>
          <Button color="inherit" id="nav-buttons">
            Events
          </Button>
          {!isLoggedIn && (
            <div>
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
            </div>
          )}
          {isLoggedIn && (
            <div>
              <Button>My Events</Button>
              <Button>Join Event</Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
