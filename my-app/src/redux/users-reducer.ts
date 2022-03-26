import {ActionsTypes} from "./store";
import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_PAGE = "SET_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_PRELOADER = "SET_PRELOADER";
const SET_DISABLED_BTN = "SET_DISABLED_BTN";

export type UsersActionsTypes = ReturnType<typeof acceptFollow> | ReturnType<typeof acceptUnfollow>
    | ReturnType<typeof setUsers> | ReturnType<typeof setPage> | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setFetching> | ReturnType<typeof setDisabledBtn>

export type UsersType = {
    name: string
    id: number
    uniqueUrlName: any
    photos: {
        small: any
        large: any
    }
    "status": any
    "followed": boolean
}

export type UsersPageType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: any[]
}

let initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionsTypes): UsersPageType => {

    switch (action.type) {
        case FOLLOW:
            return {...state
                , users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {...state
                , users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case SET_PRELOADER:
            return {...state, isFetching: action.isFetching}
        case SET_DISABLED_BTN:
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const acceptFollow = (userId: any) => {
    return {
        type: FOLLOW,
        userId
    } as const
}

export const acceptUnfollow = (userId: any) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}

export const setUsers = (users: any) => {
    return {
        type: SET_USERS,
        users
    } as const
}

export const setPage = (currentPage: number) => {
    return {
        type: SET_PAGE,
        currentPage
    } as const
}

export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount
    } as const
}

export const setFetching = (isFetching: boolean) => {
    return {
        type: SET_PRELOADER,
        isFetching
    } as const
}

export const setDisabledBtn = (isFetching: boolean, userId: any) => {
    return {
        type: SET_DISABLED_BTN,
        isFetching,
        userId,
    } as const
}

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: any) => {

        dispatch(setPage(currentPage));
        dispatch(setFetching(true))

        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}

export const follow = (userId: number) => (dispatch: any) => {

    dispatch(setDisabledBtn(true, userId))

    usersAPI.getFollow(userId)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(acceptFollow(userId))
            }
            dispatch(setDisabledBtn(false, userId))
        })
}

export const unfollow = (userId: number) => (dispatch: any) => {

    dispatch(setDisabledBtn(true, userId))

    usersAPI.getUnfollow(userId)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(acceptUnfollow(userId))
            }
            dispatch(setDisabledBtn(false, userId))
        })
}


  


