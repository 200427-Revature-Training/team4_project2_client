import { Dispatch } from 'react'
import { Action } from 'redux'
import { Login } from '../models/login'

export const loginActionTypes = {
    CHECK_USERNAME: 'CHECK_USERNAME'
}

export interface LoginActionPayload {
    payload: {
        login: Login
    }
}


export const checkLogin = (login: Login) => (dispatch: Dispatch<LoginActionPayload & Action>) => {
    dispatch({
        type: loginActionTypes.CHECK_USERNAME, 
        payload: {
            login
        }
    })
}