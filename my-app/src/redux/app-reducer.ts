import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAuth} from "./auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

export type AuthActionsTypes = ReturnType<typeof setInitialized>

export type appType = {
    initialized: boolean
}

let initialState: appType = {
    initialized: false,
}

export const appReducer = (state: appType = initialState, action: AuthActionsTypes): appType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}

export const setInitialized = () => {
    return {
        type: SET_INITIALIZED,
    } as const
}


export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuth())
    promise.then(() => {
        dispatch(setInitialized())
    })
}
