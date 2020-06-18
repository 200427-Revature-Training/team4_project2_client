import { Dispatch } from 'react'
import { Action } from 'redux'
import { User } from '../models/User'

export const signUpActionTypes = {
    SIGN_UP: 'SIGN_UP'
}

export interface SignUpActionPayload {
    payload: {
        user: User;
    }
}


export const checkLogin = (user: User) => (dispatch: Dispatch<SignUpActionPayload & Action>) => {
    dispatch({
        type: signUpActionTypes.SIGN_UP, 
        payload: {
            user
        }
    })
}