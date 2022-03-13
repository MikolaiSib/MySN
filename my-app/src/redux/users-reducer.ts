import {ActionsTypes} from "./store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_PAGE = "SET_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_PRELOADER = "SET_PRELOADER";

export type UsersActionsTypes = ReturnType<typeof follow> | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers> | ReturnType<typeof setPage> | ReturnType<typeof setTotalUsersCount> | ReturnType<typeof setFetching>

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
}

let initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionsTypes): UsersPageType => {

    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case SET_USERS:
            return {...state, users: [ ...action.users]}
        case SET_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case SET_PRELOADER:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

export const follow = (userId: any) => {
    return {
        type: FOLLOW,
        userId
    } as const
}

export const unfollow = (userId: any) => {
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
