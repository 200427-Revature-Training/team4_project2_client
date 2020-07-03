import { internalAxios } from './internal-Axios';

export const addSocialEventToAttendingList = async (payload: any) => {
    const response = await internalAxios.put('/user', payload);
    return response;
}

