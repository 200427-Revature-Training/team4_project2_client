import { internalAxios, authAxios } from './internal-Axios';

export const addSocialEventToAttendingList = async (payload: any) => {
    const response = await authAxios.put('/user', payload);
    return response;
}

