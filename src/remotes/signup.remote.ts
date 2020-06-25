import {Signup} from '../models/signup';
import { internalAxios } from './internal-Axios';
;



export const createNewAccount = async (signup: Signup) => {
    const response = await internalAxios.post('/authentication/signup', signup);
    return response;
}