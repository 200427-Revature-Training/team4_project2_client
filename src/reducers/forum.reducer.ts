import { ForumState } from '.';
import { Action } from 'redux';
import { ForumActionPayload, forumActionTypes } from '../actions/forum.actions';

const initialState: ForumState = {
    posts: []
}

export const myEventReducer = (state: ForumState = initialState,
    action: ForumActionPayload & Action) => {
    switch (action.type) {
        case forumActionTypes.MAKE_POST: {
            let postArray = state.posts;
            if (!state.posts.some(p =>
                p.id === action.payload.post.id)) {
                postArray = [...postArray, action.payload.post]
                    .sort((a, b) => a.id - b.id);
            }
            return {
                ...state,
                posts: postArray
            }
        }
        default: {
            return state;
        }
    }

}