import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const UNFOLLOW = "UNFOLLOW";

export type AuthActionsTypes = ReturnType<typeof setUserData> | ReturnType<typeof unfollow>

export type authType = {
    email: string | null
    userId: string | number | null
    login: string | null
    isAuth: boolean
}

let initialState: authType = {
    email: null,
    userId: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: authType = initialState, action: AuthActionsTypes): authType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case UNFOLLOW:
            return {...state,}
        default:
            return state
    }
}

export const setUserData = (email: string | null, userId: string | number | null, login: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {
            email,
            userId,
            login,
            isAuth,
        }
    } as const
}

export const unfollow = (userId: any) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}

export const getAuth = () => (dispatch: any) => {
    authAPI.getMe()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {email, id, login} = response.data.data
                dispatch(setUserData(email, id, login, true))
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuth())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
}

export const logout = () => (dispatch: any) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
                // dispatch(getAuth())
            }
        })
}
