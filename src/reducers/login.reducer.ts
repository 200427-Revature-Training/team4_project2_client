import { LoginState } from '.';
import { LoginActionPayload, loginActionTypes } from '../actions/login.actions';
import { Action } from 'redux';

const initialState: LoginState = {
    username: '',
    password: ''
}


export const loginReducer = (state: LoginState = initialState,
    action: LoginActionPayload & Action) => {
    switch (action.type) {
        case loginActionTypes.CHECK_USERNAME: {
            return {
                ...state,
                username: action.payload.login.username,
                password: action.payload.login.password
            }
        }
        default: return state;
    }

}