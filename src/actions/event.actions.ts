import { Dispatch } from 'react'
import { Action } from 'redux'
import { SocialEvent } from '../models/Event'

export const socialEventActionTypes = {
    CREATE_EVENT: 'CREATE_EVENT',
    JOIN_EVENT: 'JOIN_EVENT'
}

export interface SocialEventActionPayload {
    payload: {
        socialEvent: SocialEvent
    }
}


export const createEvent = (socialEvent: SocialEvent) => (dispatch: Dispatch<SocialEventActionPayload & Action>) => {
    dispatch({
        type: socialEventActionTypes.CREATE_EVENT, 
        payload: {
            socialEvent
        }
    })
}

export const joinEvent = (socialEvent: SocialEvent) => (dispatch: Dispatch<SocialEventActionPayload & Action>) => {
    dispatch({
        type: socialEventActionTypes.JOIN_EVENT, 
        payload: {
            socialEvent
        }
    })
}