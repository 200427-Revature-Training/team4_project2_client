import { Dispatch } from 'react'
import { Action } from 'redux'
import { Post } from '../models/Post'

export const forumActionTypes = {
    MAKE_POST: 'MAKE_POST',
    MAKE_COMMENT: 'MAKE_COMMENT'
}

export interface ForumActionPayload {
    payload: {
        post: Post
    }
}

export const makePost = (post: Post) => (dispatch: Dispatch<ForumActionPayload & Action>) => {
    dispatch({
        type: forumActionTypes.MAKE_POST, 
        payload: {
            post
        }
    })
}

export const joinEvent = (post: Post) => (dispatch: Dispatch<ForumActionPayload & Action>) => {
    dispatch({
        type: forumActionTypes.MAKE_COMMENT, 
        payload: {
            post
        }
    })
}