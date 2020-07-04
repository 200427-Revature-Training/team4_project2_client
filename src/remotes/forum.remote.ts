import { internalAxios } from "./internal-Axios";
import { Event, Post, Comment } from "../models/Forum";

export const getForumEvent = async (eventpost: string) => {
  const response = await internalAxios.get<Event[]>(
    `/event?eventId=${eventpost}`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ6aW5vZ3JlIiwiZXhwIjoxNTkzNzY2MDQ4LCJpYXQiOjE1OTM3NDgwNDh9.7a2zpOTN0oEPI9RdcMTnq4cxYvtqvcdZM5aFueD0MaTuFuvj7p6LFosW4yMsaTlPjCuDykMo_8UpnvF7sqkctQ",
      },
    }
  );
  return response.data;
};

export const getForumPost = async (eventpost: string) => {
  const response = await internalAxios.get<Post[]>(
    `/post?noteventTypeId=${eventpost}`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ6aW5vZ3JlIiwiZXhwIjoxNTkzNzY2MDQ4LCJpYXQiOjE1OTM3NDgwNDh9.7a2zpOTN0oEPI9RdcMTnq4cxYvtqvcdZM5aFueD0MaTuFuvj7p6LFosW4yMsaTlPjCuDykMo_8UpnvF7sqkctQ",
      },
    }
  );
  return response.data;
};

export const getForumComment = async (eventpost: string) => {
  const response = await internalAxios.get<Comment[]>(
    `/comment?postId=
    ${eventpost}`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ6aW5vZ3JlIiwiZXhwIjoxNTkzNzY2MDQ4LCJpYXQiOjE1OTM3NDgwNDh9.7a2zpOTN0oEPI9RdcMTnq4cxYvtqvcdZM5aFueD0MaTuFuvj7p6LFosW4yMsaTlPjCuDykMo_8UpnvF7sqkctQ",
      },
    }
  );
  return response.data;
};
