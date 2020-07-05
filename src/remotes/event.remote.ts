import { internalAxios, authAxios } from "./internal-Axios";
import { SocialEvent } from "../models/Event";
import { Post } from "../models/Post";

export const getSocialEventByTypeId = async (socialEventTypeId: number) => {
  const response = await authAxios.get<SocialEvent[]>(
    `/event/external/eventTypeId/${socialEventTypeId}`
  );
  return response.data.map((socialEvent) => {
    socialEvent.startTime = new Date(socialEvent.startTime);
    return socialEvent;
  });
};

// import { Login } from "../models/login";
// import { internalAxios } from "./internal-Axios";
// import { SocialEvent } from "../models/Event";
// import { Post } from "../models/Post";

// export const getSocialEventByTypeId = async (socialEventTypeId: number) => {
//   console.log(socialEventTypeId);
//   const response = await internalAxios.get<SocialEvent[]>(
//     `/event?eventTypeId=${socialEventTypeId}`,
//     {
//       headers: {
//         Authorization:
//           "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ6aW5vZ3JlIiwiZXhwIjoxNTkzNzY2MDQ4LCJpYXQiOjE1OTM3NDgwNDh9.7a2zpOTN0oEPI9RdcMTnq4cxYvtqvcdZM5aFueD0MaTuFuvj7p6LFosW4yMsaTlPjCuDykMo_8UpnvF7sqkctQ",
//       },
//     }
//   );
//   return response.data.map((socialEvent) => {
//     socialEvent.startTime = new Date(socialEvent.startTime);
//     return socialEvent;
//   });
// };
// >>>>>>> bcb7a275824e3ea995fa029971501824a06ada2f
// export const getSocialEventByType = async (socialEventType: string) => {
//     console.log(socialEventType);
//     const response = await internalAxios
//     .get<SocialEvent[]>(`/event?eventType=${socialEventType}`);
//     return response.data.map(socialEvent => {
//         socialEvent.startTime = new Date(socialEvent.startTime);
//         return socialEvent;
//     });
// }

export const getSocialEventByTitle = async (socialEventTitle: string) => {
  console.log(socialEventTitle);
  const response = await authAxios.get<SocialEvent[]>(
    `/event/external/eventTitle/${socialEventTitle}`
  );
  return response.data.map((socialEvent) => {
    socialEvent.startTime = new Date(socialEvent.startTime);
    return socialEvent;
  });
};
// =======
//   console.log(socialEventTitle);
//   const response = await internalAxios.get<SocialEvent[]>(
//     `/attend/event/title/${socialEventTitle}`
//   );
//   return response.data.map((socialEvent) => {
//     socialEvent.startTime = new Date(socialEvent.startTime);
//     return socialEvent;
//   });
// };
// >>>>>>> bcb7a275824e3ea995fa029971501824a06ada2f

export const getAllSocialEvents = async () => {
  const response = await authAxios.get<SocialEvent[]>(`/event/allevents`);
  return response.data.map((socialEvent) => {
    socialEvent.startTime = new Date(socialEvent.startTime);
    return socialEvent;
  });
};

export const getAttendSocialEventByUserId = async (userId: number) => {
  const response = await authAxios.get<SocialEvent[]>(
    `/attend/${userId}/event/`
  );
  return response.data.map((socialEvent) => {
    socialEvent.startTime = new Date(socialEvent.startTime);
    return socialEvent;
  });
};

export const getHostSocialEventByUserId = async (userId: number) => {
  const response = await authAxios.get<SocialEvent[]>(
    `event/external?hostId=${userId}`
  );
  return response.data.map((socialEvent) => {
    socialEvent.startTime = new Date(socialEvent.startTime);
    return socialEvent;
  });
};

export const getPostsByUserId = async (userId: number) => {
  const response = await authAxios.get<Post[]>(`/post?userId=${userId}`);
  return response.data.map((post) => {
    post.createDate = new Date(post.createDate);
    return post;
  });
};
// =======
//   const response = await internalAxios.get<SocialEvent[]>(
//     `/host/${userId}/event/`
//   );
//   return response.data.map((socialEvent) => {
//     socialEvent.startTime = new Date(socialEvent.startTime);
//     return socialEvent;
//   });
// };

// export const getPostsByUserId = async (userId: number) => {
//   const response = await internalAxios.get<Post[]>(`/event/${userId}/post/`);
//   return response.data.map((post) => {
//     post.createDate = new Date(post.createDate);
//     return post;
//   });
// };
// >>>>>>> bcb7a275824e3ea995fa029971501824a06ada2f

export const getAllPosts = async () => {
  const response = await authAxios.get<Post[]>(`/event/post/allposts`);
  return response.data.map((post) => {
    post.createDate = new Date(post.createDate);
    return post;
  });
};

export const getPostsByFollowUserId = async (userId: number) => {
  const response = await authAxios.get<Post[]>(`/event/${userId}/follow/post`);
  return response.data.map((post) => {
    post.createDate = new Date(post.createDate);
    return post;
  });
};

export const getPostsByLikeUserId = async (userId: number) => {
  const response = await authAxios.get<Post[]>(`/event/${userId}/like/post`);
  return response.data.map((post) => {
    post.createDate = new Date(post.createDate);
    return post;
  });
};
// =======
//   const response = await internalAxios.get<Post[]>(
//     `/event/${userId}/like/post`
//   );
//   return response.data.map((post) => {
//     post.createDate = new Date(post.createDate);
//     return post;
//   });
// };

// export const hostNewSocialEvent = async (payload: any) => {
//   const response = await internalAxios.post("/host/host/newevent", payload);
//   return response;
// };
// >>>>>>> bcb7a275824e3ea995fa029971501824a06ada2f
