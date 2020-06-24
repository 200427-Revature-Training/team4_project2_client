import { Login } from '../models/login';
import { internalAxios } from './internal-Axios';
import { SocialEvent } from '../models/Event';

export const getSocialEventByType = async (socialEventType: string) => {
    console.log(socialEventType);
    const response = await internalAxios
    .get<SocialEvent[]>(`/attend/event/type/${socialEventType}`);
    return response.data.map(socialEvent => {
        // Replace string birthdate with Date object
        socialEvent.startTime = new Date(socialEvent.startTime);
        return socialEvent;
    });
}

export const getSocialEventByTitle = async (socialEventTitle: string) => {
    console.log(socialEventTitle);
    const response = await internalAxios
    .get<SocialEvent[]>(`/attend/event/title/${socialEventTitle}`);
    return response.data.map(socialEvent => {
        // Replace string birthdate with Date object
        socialEvent.startTime = new Date(socialEvent.startTime);
        return socialEvent;
    });
}
