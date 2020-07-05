import React, { useState, useEffect } from "react";
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
import { CreatePostComponent } from "./forun-sub.components/create-post.component";
import { CreateCommentComponent } from "./forun-sub.components/create-comment.component";

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

interface ForumProps {
  eventId: any;
}

export const ForumComponent: React.FC<ForumProps> = (props) => {
  //console.log(props.eventId);
  const classes = useStyles();
  const classe = useStyle();
  const clas = useStyl();
  const [id, setId] = useState(props.eventId);
  const [event, setEvent] = useState<Event[]>([]);
  const [post, setPost] = useState<Post[]>();
  const [postId, setPostId] = useState<number>();
  const [comment, setComment] = useState<Comment[]>();

  const handleClick = async () => {
    if (id != "") {
      const temp = await getForumEvent(id);
      setEvent([temp]);

      const temp1 = await getForumPost(id);
      setPost(temp1);
    }
  };

  useEffect(() => {
    handleClick();
  }, []);
  const handleComment = async (id: number) => {
    setPostId(id);
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
                  {e.title.toLocaleUpperCase()}
                  <article>{e.description}</article>
                  <table
                    cellPadding="10"
                    cellSpacing="5"
                    className="event-table"
                  >
                    <tbody>
                      <tr className="tablecell">
                        <td>Price: {e.price}</td>
                        <td>Max Attendees: {e.maxPeople}</td>
                        <td>Start Date: {e.startTime}</td>
                      </tr>
                      <tr className="event-table create-post">
                        <td>
                          <CreatePostComponent event={id} />
                        </td>
                      </tr>
                    </tbody>
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
                      <div className="poster-details">
                        <span id="poster-name">{p.user.username}</span>
                        <span id="poster-date">{p.creationTime}</span>
                      </div>
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
                        <Typography className={clas.heading}>
                          <div className="comment-head">
                            <span className="comments">Comments</span>
                            <span className="comments add-comment">
                              <CreateCommentComponent postId={postId} />
                            </span>
                          </div>
                        </Typography>
                      </ExpansionPanelSummary>
                      {comment?.map((c) => {
                        return (
                          <ExpansionPanelDetails key={c.id}>
                            <Typography id="comment-text">
                              <div className="poster-details">
                                <span id="poster-name">{c.user.username}</span>
                                <span id="poster-date">{c.creationTime}</span>
                              </div>
                              <article>
                                {c.commentContent}
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Doloremque voluptas beatae
                                inventore fugit, suscipit atque labore ex est
                                iusto corporis. Maiores atque in deserunt
                                dignissimos dolor ipsam, quia dolorum quo. yar
                              </article>
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
