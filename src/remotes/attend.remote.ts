import { internalAxios } from './internal-Axios';

export const addSocialEventToAttendingList = async (payload: any) => {
    const response = await internalAxios.post('/event/attend', payload);
    return response;
}

