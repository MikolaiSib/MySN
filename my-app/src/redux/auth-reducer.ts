import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {Dispatch} from "redux";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL';

export type AuthActionsTypes = ReturnType<typeof setUserData> | ReturnType<typeof setCaptchaUrl>

export type authType = {
    email: string | null
    userId: string | number | null
    login: string | null
    isAuth: boolean
    captchaUrl: string
}

let initialState: authType = {
    email: null,
    userId: null,
    login: null,
    isAuth: false,
    captchaUrl: '',
}

export const authReducer = (state: authType = initialState, action: AuthActionsTypes): authType => {
    switch (action.type) {
        case SET_CAPTCHA_URL:
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export const setCaptchaUrl = (captchaUrl: string) => {
    return {
        type: SET_CAPTCHA_URL,
        payload: {
            captchaUrl
        }
    } as const
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

// export const getAuth = () => (dispatch: Dispatch) => {
//     return authAPI.getMe()
//         .then(response => {
//             if (response.data.resultCode === 0) {
//                 let {email, id, login} = response.data.data
//                 dispatch(setUserData(email, id, login, true))
//             }
//         })
// }

export const getAuth = () => async (dispatch: Dispatch) => {
    let response = await authAPI.getMe()
    if (response.data.resultCode === 0) {
        let {email, id, login} = response.data.data
        dispatch(setUserData(email, id, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuth())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(setCaptchaUrl(captchaUrl))
}

export const logout = () => async (dispatch: Dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }
}
