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
                ...action.data,
                isAuth: true
            }
        case UNFOLLOW:
            return {...state,}
        default:
            return state
    }
}

export const setUserData = (email: string, userId: string | number, login: string) => {
    return {
        type: SET_USER_DATA,
        data: {
            email,
            userId,
            login,
        }
    } as const
}

export const unfollow = (userId: any) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}

