import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import "./navbar.component.css";

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
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
          >
            <Typography variant="h6" className={classes.title} id="logo">
              TempestSociety
            </Typography>
          </IconButton>
          <Typography variant="h6" className={classes.title} id="logo">
            {user != "" ? `Welcome ${user}` : "PlaceHolder for user's name"}
          </Typography>
          <Button color="inherit" id="nav-buttons">
            Events
          </Button>
          {!isLoggedIn && (
            <div>
              <Button color="inherit" id="nav-buttons">
                Login
              </Button>
              <Button color="inherit" id="nav-buttons">
                SignUp
              </Button>
            </div>
          )}
          {isLoggedIn && (
            <div>
              <Button color="inherit" id="nav-buttons">
                My Events
              </Button>
              <Button color="inherit" id="nav-buttons">
                Join Event
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
