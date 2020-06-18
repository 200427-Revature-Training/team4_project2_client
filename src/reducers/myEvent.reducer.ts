import { MySocialEventState } from '.';
import { Action } from 'redux';
import { SocialEventActionPayload, socialEventActionTypes } from '../actions/event.actions';

const initialState: MySocialEventState = {
    hostSocialEvents: [],
    attendSocialEvents: []
}


export const myEventReducer = (state: MySocialEventState = initialState,
    action: SocialEventActionPayload & Action) => {
    switch (action.type) {
        case socialEventActionTypes.CREATE_EVENT: {
            let socialEventArray = state.hostSocialEvents;
            if (!state.hostSocialEvents.some(e =>
                e.id === action.payload.socialEvent.id)) {
                socialEventArray = [...socialEventArray, action.payload.socialEvent]
                    .sort((a, b) => a.id - b.id);
            }
            return {
                ...state,
                hostSocialEvents: socialEventArray
            }
        }
        case socialEventActionTypes.JOIN_EVENT: {
            let socialEventArray = state.attendSocialEvents;
            if (!state.attendSocialEvents.some((e: { id: number; }) =>
                e.id === action.payload.socialEvent.id)) {
                socialEventArray = [...socialEventArray, action.payload.socialEvent]
                    .sort((a, b) => a.id - b.id);
            }
            return {
                ...state,
                attendSocialEvents: socialEventArray
            }
        }
        default: {
            return state;
        }
    }

}