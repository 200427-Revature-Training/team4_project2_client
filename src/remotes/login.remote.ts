import { Login } from '../models/login';
import { internalAxios } from './internal-Axios';
import { User } from '../models/User';


export const checkLoginCredentials = async (login: Login) => {
    const response = await internalAxios.post('/authentication/login', login);
    return response;
}

export const createNewUser = async (user: User) => {
    const response = await internalAxios.post('/authenticate/signup', user);
    return response;
}