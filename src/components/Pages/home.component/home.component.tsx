import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";
import "./home.component.css";
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

const useStyle = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

const useStyl = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  })
);

export const HomeComponent: React.FC = () => {
  const classes = useStyles();
  const classe = useStyle();
  const clas = useStyl();
  return (
    <React.Fragment>
      <main className="container">
        <div id="content-container">
          <Typography variant="h4" className={classes.title} id="tag-line">
            From technology to movies and exhibitions to food, we have some of
            the greatest events around. Check out some of our featured events
            below!!!
          </Typography>
          <section id="b">
            <Card className={classe.root} id="card-section">
              <CardActionArea>
                <CardMedia
                  className={classe.media}
                  image={require("../../../images/games.jpg")}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    id="text-display"
                  >
                    {"Board & Video Games"}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    id="text-display"
                  >
                    There are at least two kinds of games. One could be called
                    finite, the other infinite. A finite game is played for the
                    purpose of winning, an infinite game for the purpose of
                    continuing the play. <br />
                    —James P. Carse
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card className={classe.root} id="card-section">
              <CardActionArea>
                <CardMedia
                  className={classe.media}
                  image={require("../../../images/tech.jpg")}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    id="text-display"
                  >
                    Technology
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    id="text-display"
                  >
                    "It has become appallingly obvious that our technology has
                    exceeded our humanity." <br />— Albert Einsteing
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card className={classe.root} id="card-section">
              <CardActionArea>
                <CardMedia
                  className={classe.media}
                  image={require("../../../images/exercise.png")}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    id="text-display"
                  >
                    Exercise
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    id="text-display"
                  >
                    “The last three or four reps is what makes the muscle grow.
                    This area of pain divides a champion from someone who is not
                    a champion.” <br />— Arnold Schwarzenegger,
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </section>
          <section>
            <Typography variant="h4" className={classes.title} id="tag-line">
              Click below to search for all our events!!!
            </Typography>
          </section>
          <section id="event-button-container">
            <Link to="/searchevent" id="nav-links">
              <Fab variant="extended" id="event-button">
                <NavigationIcon className={clas.extendedIcon} />
                Search Events
              </Fab>
            </Link>
          </section>
        </div>
      </main>
      <footer id="copyright">
        &copy; 2020 City Pop Inc- All Right Reserved
      </footer>
    </React.Fragment>
  );
};
