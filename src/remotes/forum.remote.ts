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
    `comment?postId/${eventpost}`
  );
  return response.data;
};
export const forumPost = async (payload: any) => {
  return authAxios.post(`/post`, {
    data: payload,
  });
};
