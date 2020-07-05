import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import "./create-post-component.css";
import Fab from "@material-ui/core/Fab";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { forumPost } from "../../../../remotes/forum.remote";

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
interface PostProps {
  event: any;
}
export const CreatePostComponent: React.FC<PostProps> = (props) => {
  const clas = useStyl();
  const [open, setOpen] = React.useState(false);
  const [post, setPost] = React.useState("");
  const [eventId, setEventId] = React.useState(props.event);
  console.log(eventId);

  useEffect(() => {}, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePost = () => {
    setOpen(false);

    forumPost(post, eventId);
    console.log(post);
  };
  return (
    <React.Fragment>
      <div>
        <Fab
          variant="extended"
          className={clas.extendedIcon}
          id="create-button-text"
          onClick={handleClickOpen}
        >
          Create a Post
        </Fab>
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
                value={post}
                onChange={(e) => setPost(e.target.value)}
                placeholder="Tell us what you love about this event!"
                id="create-post-textarea"
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              variant="contained"
              id="cancel-button-text"
            >
              Cancel
            </Button>
            <Button
              onClick={handlePost}
              variant="contained"
              id="confirm-button-text"
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
