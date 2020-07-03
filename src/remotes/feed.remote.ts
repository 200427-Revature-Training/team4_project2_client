import { internalAxios } from './internal-Axios';
import { User } from '../models/User';

export const getUserByUserId = async (userId: number) => {
    const response = await internalAxios.get(`/user/${userId}`);
    return response
}

export const hostNewSocialEvent = async (payload: any) => {
    const response = await internalAxios.post('/event/internal', payload);
    return response;
}
