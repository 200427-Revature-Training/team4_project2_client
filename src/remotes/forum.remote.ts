import { internalAxios } from "./internal-Axios";
import { Event, Post, Comment } from "../models/Forum";

export const getForumEvent = async (eventpost: string) => {
  const response = await internalAxios.get<Event[]>(
    `/event?eventId=${eventpost}`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2OXRla2FzaGkiLCJleHAiOjE1OTM4NDM4ODEsImlhdCI6MTU5MzgyNTg4MX0.Ri2s2Ez1oDLsFFLfwhZme_6sf1ZxVTU_5g6v_GV4NzHi2olIzLPwlTng4umzfSQdrl3sTR0oE67OK0qVX-QPxQ",
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
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2OXRla2FzaGkiLCJleHAiOjE1OTM4NDM4ODEsImlhdCI6MTU5MzgyNTg4MX0.Ri2s2Ez1oDLsFFLfwhZme_6sf1ZxVTU_5g6v_GV4NzHi2olIzLPwlTng4umzfSQdrl3sTR0oE67OK0qVX-QPxQ",
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
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2OXRla2FzaGkiLCJleHAiOjE1OTM4NDM4ODEsImlhdCI6MTU5MzgyNTg4MX0.Ri2s2Ez1oDLsFFLfwhZme_6sf1ZxVTU_5g6v_GV4NzHi2olIzLPwlTng4umzfSQdrl3sTR0oE67OK0qVX-QPxQ",
      },
    }
  );
  return response.data;
};
