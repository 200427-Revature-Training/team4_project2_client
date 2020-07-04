import { internalAxios, authAxios } from './internal-Axios';
import { User } from '../models/User';

export const getUserByUserId = async (userId: number) => {
    const response = await authAxios.get(`/user/${userId}`);
    return response
}

export const hostNewSocialEvent = async (payload: any) => {
    const response = await authAxios.post('/event/internal', payload);
    return response;
}
