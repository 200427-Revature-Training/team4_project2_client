import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Icon from "@material-ui/core/Icon";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import "./create-comment.component.css";
import { Typography } from "@material-ui/core";
import { forumComment } from "../../../../remotes/forum.remote";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > span": {
        margin: theme.spacing(0),
      },
    },
  })
);

export interface CommentProps {
  postId: any;
}

export const CreateCommentComponent: React.FC<CommentProps> = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [comment, setComment] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePost = () => {
    setOpen(false);
    forumComment(comment, props.postId);
  };
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Typography id="create-c-button-text" onClick={handleClickOpen}>
          <div className="add-button">
            <span className="add-icon">
              <Icon>add_circle</Icon>
            </span>
            <span className="add-text">Add Comment</span>
          </div>
        </Typography>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Create a post below"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <TextareaAutosize
                aria-label="Description"
                rowsMin={7}
                cols={73}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Tell us what you love about this event!"
                id="create-comment-textarea"
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              variant="contained"
              id="cancel-c-button-text"
            >
              Cancel
            </Button>
            <Button
              onClick={handlePost}
              variant="contained"
              id="confirm-c-button-text"
              autoFocus
            >
              Post
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </React.Fragment>
  );
};
