import { Login } from '../models/login';
import { internalAxios, authAxios } from './internal-Axios';
import { User } from '../models/User';




export const checkLoginCredentials = async (login: Login) => {
    const response = await internalAxios.post('/login', login);
    return response;
}

export const getUserByUsername = async (userId: string) =>{
    const response = await authAxios.get(`/user/${userId}`)
    return response
}