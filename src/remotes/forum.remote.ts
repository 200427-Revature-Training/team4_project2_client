import { internalAxios, authAxios } from "./internal-Axios";
import { Event, Post, Comment } from "../models/Forum";

export const getForumEvent = async (eventpost: string) => {
  const response = await authAxios.get(`/event/external/eventId/${eventpost}`);
  return response.data;
};

export const getForumPost = async (eventpost: string) => {
  const response = await authAxios.get<Post[]>(`/post?eventId=${eventpost}`);
  return response.data;
};

export const getForumComment = async (eventpost: string) => {
  const response = await authAxios.get<Comment[]>(
    `comment?postId=${eventpost}`
  );
  return response.data;
};
export const forumPost = async (post: any, event: any) => {
  const tempId = localStorage.getItem("userId");
  const response = await authAxios.post(`/post`, {
    image: "image2",
    postContent: post,
    creationTime: new Date(Date.now()),
    event: {
      id: event,
    },
    user: {
      id: parseInt(tempId ? tempId : ""),
    },
  });
  return response;
};

export const forumComment = async (comment: any, postId: any) => {
  const tempId = localStorage.getItem("userId");
  const response = await authAxios.post(`/comment`, {
    image: "image2",
    commentContent: comment,
    creationTime: new Date(Date.now()),
    post: {
      id: postId,
    },
    user: {
      id: parseInt(tempId ? tempId : ""),
    },
  });
  return response;
};
