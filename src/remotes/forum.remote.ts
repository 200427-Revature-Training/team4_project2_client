import { internalAxios } from "./internal-Axios";
import { Event, Post, Comment } from "../models/Forum";

export const getForumEvent = async (eventpost: string) => {
  const response = await internalAxios.get<Event[]>(
    `/event/${eventpost}/event`
  );
  return response.data;
};

export const getForumPost = async (eventpost: string) => {
  const response = await internalAxios.get<Post[]>(`/event/${eventpost}/post`);
  return response.data;
};

export const getForumComment = async (eventpost: string) => {
  const response = await internalAxios.get<Comment[]>(
    `/event/${eventpost}/comment`
  );
  return response.data;
};
