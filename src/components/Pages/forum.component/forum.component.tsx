import React, { useState } from "react";
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
import {
  getForumPost,
  getForumEvent,
  getForumComment,
} from "../../../remotes/forum.remote";
import { Event, Post, Comment } from "../../../models/Forum";
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
  const [id, setId] = useState("1");
  const [event, setEvent] = useState<Event[]>();
  const [post, setPost] = useState<Post[]>();
  const [comment, setComment] = useState<Comment[]>();

  const handleClick = async () => {
    const temp = await getForumEvent(id);
    setEvent(temp);
    const temp1 = await getForumPost(id);
    setPost(temp1);
  };

  const handleComment = async (id: number) => {
    const temp = await getForumComment(id.toString());
    setComment(temp);
  };

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
      <Grid container spacing={0}>
        <Grid item xs={12}>
          {event?.map((e) => {
            return (
              <Paper className={classes.paper} id="event-box" key={e.id}>
                <Typography
                  variant="h5"
                  className={classe.title}
                  id="event-text"
                >
                  {e.title}
                  <article>{e.description}</article>
                  <table cellPadding="5" cellSpacing="2" id="event-table">
                    <tr>
                      <td>Price: {e.price}</td>
                      <td>Max Attendees: {e.maxPeople}</td>
                      <td>Start Date: {e.startTime}</td>
                    </tr>
                  </table>
                </Typography>
              </Paper>
            );
          })}
        </Grid>
      </Grid>
      <section id="c">
        <Grid container spacing={0} id="forum-proper">
          <Grid item xs={7}>
            {post?.map((p) => {
              return (
                <React.Fragment key={p.id}>
                  <Paper className={classes.paper} id="forum-main">
                    <Typography
                      variant="h5"
                      className={classe.title}
                      id="forum-main-text"
                    >
                      Title <br />
                      <span id="post-date">{p.creationTime}</span>
                      <article>{p.postContent}</article>
                    </Typography>
                  </Paper>
                  <section id="interact-pane">
                    <Fab aria-label="like" color="secondary">
                      <FavoriteIcon />
                    </Fab>
                    <ExpansionPanel id="comment-panel">
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        onClick={() => handleComment(p.id)}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={clas.heading} id="comments">
                          Comments
                        </Typography>
                      </ExpansionPanelSummary>
                      {comment?.map((c) => {
                        return (
                          <ExpansionPanelDetails key={c.id}>
                            <Typography>
                              {c.creationTime} {c.commentContent}
                            </Typography>
                          </ExpansionPanelDetails>
                        );
                      })}
                    </ExpansionPanel>
                  </section>
                </React.Fragment>
              );
            })}
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
      <Fab aria-label="like" color="secondary" onClick={() => handleClick()}>
        <FavoriteIcon />
      </Fab>
      <footer id="copyright">
        &copy; 2020 TempestSociety Inc- All Right Reserved
      </footer>
    </div>
  );
};
/*
{posts?.map((p) => {
  return (
);
})}
*/
