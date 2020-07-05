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


export const getAllSocialEvents = async () => {
    const response = await authAxios.get<SocialEvent[]>(`/event/external`);
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

