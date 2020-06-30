import { internalAxios } from "./internal-Axios";
import { Event, Post, Comment } from "../models/Forum";

export const getForumEvent = async (eventpost: string) => {
  const response = await internalAxios.get<Event[]>(
    `/event?eventId=${eventpost}`
  );
  return response.data;
};

export const getForumPost = async (eventpost: string) => {
  const response = await internalAxios.get<Post[]>(
    `/post?noteventTypeId=${eventpost}`
  );
  return response.data;
};

export const getForumComment = async (eventpost: string) => {
  const response = await internalAxios.get<Comment[]>(
    `/comment?postId=
    ${eventpost}`
  );
  return response.data;
};
