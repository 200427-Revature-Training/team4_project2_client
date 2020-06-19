import { Login } from '../models/login';
import { internalAxios } from './internal-Axios';


export const checkLoginCredentials = async (login: Login) => {
    const response = await internalAxios.post('/authenticate/login', login);
    return response;
}