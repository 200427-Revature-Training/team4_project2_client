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
  getAllEvent,
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
  const classes = useStyles();
  const classe = useStyle();
  const clas = useStyl();
  const [id, setId] = useState(props.eventId);
  const [other, setOther] = useState<Event[]>([]);
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

      const temp2 = await getAllEvent();
      const filter = temp2.filter((o) => o.id != id);
      setOther(filter);
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

  const handleOther = async (e: any) => {
    const temp = await getForumEvent(e);
    setEvent([temp]);

    const temp1 = await getForumPost(e);
    setPost(temp1);

    const temp2 = await getAllEvent();
    const filter = temp2.filter((o) => o.id != e);
    setOther(filter);
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
              Please read the following rules carefully, as violation of any of
              them may result in termination of your account.
              <ol id="rules-list">
                <li>Do not post copyright-infringing material.</li>
                <li>Do not post “offensive” posts, links or images.</li>
                <li>Remain respectful of other members at all times.</li>
                <li>
                  Please do not spam. The definition of spam is an irrelevant or
                  advertising post. Any post considered spam will be removed.
                </li>
                <li>
                  {" "}
                  Please do not post threads text in all CAPITALS since this is
                  considered to be shouting and is not necessary.
                </li>
              </ol>
              HAVE FUN!!!
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
                  <span id="title">{e.title.toLocaleUpperCase()}</span>
                  <article>{e.description.toUpperCase()}</article>
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
                                <span id="poster-name">
                                  {c.user.username} {"\u00A0"}
                                  {"\u00A0"}
                                </span>
                                <span id="poster-date">{c.creationTime}</span>
                              </div>
                              <article>{c.commentContent}</article>
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
                {other.slice(0, 6).map((o) => {
                  return (
                    <ul id="other-forum-links">
                      <li key={o.id} onClick={() => handleOther(o.id)}>
                        {o.description.toUpperCase()}
                      </li>
                    </ul>
                  );
                })}
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
