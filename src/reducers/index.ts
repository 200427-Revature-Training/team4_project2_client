import { combineReducers } from 'redux';
import { loginReducer } from './login.reducer';
import { SocialEvent } from '../models/Event';
import { Post } from '../models/Post';

export interface IState {
    loginState: LoginState;
    myEventState: MySocialEventState;
    forumState: ForumState;

}

export interface LoginState {
    username: string;
    password: string;
}

export interface MySocialEventState {
    hostSocialEvents: SocialEvent[];
    attendSocialEvents: SocialEvent[];
}

export interface ForumState {
    posts: Post[];
}

export const state = combineReducers({
    loginState: loginReducer
})
