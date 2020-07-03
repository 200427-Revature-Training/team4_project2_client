import { internalAxios } from './internal-Axios';
import { SocialEvent } from '../models/Event';
import { Post } from '../models/Post';

export const getSocialEventByTypeId = async (socialEventTypeId: number) => {
    console.log(socialEventTypeId);
    const response = await internalAxios
    .get<SocialEvent[]>(`/event/external/eventTypeId/${socialEventTypeId}`);
    return response.data.map(socialEvent => {
        socialEvent.startTime = new Date(socialEvent.startTime);
        return socialEvent;
    });
}

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
    const response = await internalAxios
    .get<SocialEvent[]>(`/event/external/eventTitle/${socialEventTitle}`);
    return response.data.map(socialEvent => {
        socialEvent.startTime = new Date(socialEvent.startTime);
        return socialEvent;
    });
}

export const getAllSocialEvents = async () => {
    const response = await internalAxios.get<SocialEvent[]>(`/event/allevents`);
    return response.data.map(socialEvent => {
        socialEvent.startTime = new Date(socialEvent.startTime);
        return socialEvent;
    });
}

export const getAttendSocialEventByUserId = async (userId: number) => {
    const response = await internalAxios
    .get<SocialEvent[]>(`/attend/${userId}/event/`);
    return response.data.map(socialEvent => {
        socialEvent.startTime = new Date(socialEvent.startTime);
        return socialEvent;
    });
}

export const getHostSocialEventByUserId = async (userId: number) => {
    const response = await internalAxios
    .get<SocialEvent[]>(`event/external?hostId=${userId}`);
    return response.data.map(socialEvent => {
        socialEvent.startTime = new Date(socialEvent.startTime);
        return socialEvent;
    });
}

export const getPostsByUserId = async (userId: number) => {
    const response = await internalAxios
    .get<Post[]>(`/post?userId=${userId}`);
    return response.data.map(post => {
        post.createDate = new Date(post.createDate);
        return post;
    });
}

export const getAllPosts = async () => {
    const response = await internalAxios.get<Post[]>(`/event/post/allposts`);
    return response.data.map(post => {
        post.createDate = new Date(post.createDate);
        return post;
    });
}

export const getPostsByFollowUserId = async (userId: number) => {
    const response = await internalAxios
    .get<Post[]>(`/event/${userId}/follow/post`);
    return response.data.map(post => {
        post.createDate = new Date(post.createDate);
        return post;
    });
}

export const getPostsByLikeUserId = async (userId: number) => {
    const response = await internalAxios
    .get<Post[]>(`/event/${userId}/like/post`);
    return response.data.map(post => {
        post.createDate = new Date(post.createDate);
        return post;
    });
}