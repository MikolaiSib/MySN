import {ActionsTypes} from "./store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

export type UsersActionsTypes = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>

export type LocationType = {
    city: string
    country: string
}

// export type UsersType = {
//     id: number | string
//     photoUrl: string
//     fullName: string
//     status: string
//     location: LocationType
//     followed: boolean
// }

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
}

let initialState: UsersPageType = {
    users: [
        // {id: 1, photoUrl: "https://img.myloview.ru/posters/man-avatar-icon-700-245635972.jpg", fullName: "Dim", status: "Boss", location: { city: "Minsk", country: "RB" }, followed: false},
        // {id: 2, photoUrl: "https://img.myloview.ru/posters/man-avatar-icon-700-245635972.jpg", fullName: "Dic", status: "Boss2", location: { city: "Msk", country: "RF" }, followed: true},
        // {id: 3, photoUrl: "https://img.myloview.ru/posters/man-avatar-icon-700-245635972.jpg", fullName: "One", status: "Boss3", location: { city: "Sib", country: "RF" }, followed: true},
        // {id: 4, photoUrl: "https://img.myloview.ru/posters/man-avatar-icon-700-245635972.jpg", fullName: "Two", status: "Boss4", location: { city: "Spb", country: "RF" }, followed: false},
        // {id: 5, photoUrl: "https://img.myloview.ru/posters/man-avatar-icon-700-245635972.jpg", fullName: "Free", status: "Boss5", location: { city: "Vlad", country: "RF" }, followed: false}
    ]
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionsTypes): UsersPageType => {

    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export const followAC = (userId: any) => {
    return {
        type: FOLLOW,
        userId
    } as const
}

export const unfollowAC = (userId: any) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}

export const setUsersAC = (users: any) => {
    return {
        type: SET_USERS,
        users
    } as const
}

