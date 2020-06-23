import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Fab from "@material-ui/core/Fab";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "./forum.component.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

const useStyle = makeStyles((theme: Theme) =>
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

const useStyl = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  })
);

export const ForumComponent: React.FC = () => {
  const classes = useStyles();
  const classe = useStyle();
  const clas = useStyl();
  return (
    <div className={classes.root} id="forum-container">
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Paper className={classes.paper} id="forum-rules">
            <Typography
              variant="h5"
              className={classe.title}
              id="forum-rules-text"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
              aliquam eligendi obcaecati veritatis sint tempora, quibusdam
              debitis, porro, saepe blanditiis numquam! Officiis blanditiis eum
              labore alias eaque deleniti, iusto impedit. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Reiciendis aliquid ipsa sit
              cumque doloribus provident aut placeat sint rem accusantium nisi
              veniam a ipsam, corrupti velit consequuntur iusto, numquam
              aperiam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam ipsum, iure atque doloremque pariatur quae illum tempora
              laboriosam velit, eligendi dolore esse magnam cum dolorum aperiam
              minima cupiditate et expedita.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <section id="c">
        <Grid container spacing={0} id="forum-proper">
          <Grid item xs={7}>
            <Paper className={classes.paper} id="forum-main">
              <Typography
                variant="h5"
                className={classe.title}
                id="forum-rules-text"
              >
                Sample post <br />
                <span id="post-date">April 27, 2020 by Muffin Man</span>
                <article>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt voluptatum ad, nulla nihil accusamus perspiciatis
                  ullam delectus, nemo quibusdam reiciendis amet eaque! Quia
                  voluptate, quas voluptatem id debitis maiores aliquam.
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente incidunt quos quasi laboriosam officia rerum ipsum
                    exercitationem amet. Tempore doloribus adipisci quam id odio
                    quae in error aliquid nihil pariatur.
                  </p>
                  <ul id="other-forum-links">
                    <li>Because Science</li>
                    <li>YOLO</li>
                    <li>Muffin Man Did what now?</li>
                    <li>G-Max One Blow</li>
                    <li>Potato AI</li>
                  </ul>
                </article>
              </Typography>
            </Paper>
            <section id="interact-pane">
              <Fab aria-label="like" color="secondary">
                <FavoriteIcon />
              </Fab>
              <ExpansionPanel id="comment-panel">
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={clas.heading} id="comments">
                    Comments
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </section>
          </Grid>
          <Grid item xs={7}>
            <Paper className={classes.paper} id="forum-main">
              <Typography
                variant="h5"
                className={classe.title}
                id="forum-rules-text"
              >
                Sample post <br />
                <span id="post-date">April 27, 2020 by Muffin Man</span>
                <article>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt voluptatum ad, nulla nihil accusamus perspiciatis
                  ullam delectus, nemo quibusdam reiciendis amet eaque! Quia
                  voluptate, quas voluptatem id debitis maiores aliquam.
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente incidunt quos quasi laboriosam officia rerum ipsum
                    exercitationem amet. Tempore doloribus adipisci quam id odio
                    quae in error aliquid nihil pariatur.
                  </p>
                  <ul id="other-forum-links">
                    <li>Because Science</li>
                    <li>YOLO</li>
                    <li>Muffin Man Did what now?</li>
                    <li>G-Max One Blow</li>
                    <li>Potato AI</li>
                  </ul>
                </article>
              </Typography>
            </Paper>
            <section id="interact-pane">
              <Fab aria-label="like" color="secondary">
                <FavoriteIcon />
              </Fab>
              <ExpansionPanel id="comment-panel">
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={clas.heading} id="comments">
                    Comments
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </section>
          </Grid>
          <Grid item xs={4} id="forum-post-container">
            <Paper className={classes.paper} id="forum-side">
              <Typography
                variant="h5"
                className={classe.title}
                id="forum-rules-text"
              >
                Other Forums
                <ul id="other-forum-links">
                  <li>Because Science</li>
                  <li>YOLO</li>
                  <li>Muffin Man Did what now?</li>
                  <li>G-Max One Blow</li>
                  <li>Potato AI</li>
                </ul>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </section>
      <footer id="copyright">
        &copy; 2020 TempestSociety Inc- All Right Reserved
      </footer>
    </div>
  );
};
