import {ActionsTypes} from "./store";
import {profileAPI, usersAPI} from "../api/api";
import {setUserData} from "./auth-reducer";

const ADD_POST = 'ADD-POST';
const SET_PROFILE = "SET_PROFILE";
const SET_STATUS = "SET_STATUS";

export type ProfileActionsTypes = ReturnType<typeof addPost>
    | ReturnType<typeof setProfile> | ReturnType<typeof setStatus>

export type PostType = {
    id: number
    post: string
    likeCount: number
}

export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: any
        website: any
        vk: any
        twitter: any
        instagram: any
        youtube: any
        github: any
        mainLink: any
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

export type ProfilePageType = {
    posts: Array<PostType>
    profile: ProfileType | object
    status: string
}


let initialState: ProfilePageType = {
    posts: [
        {id: 1, post: "Hi one", likeCount: 33},
        {id: 2, post: "Hello one", likeCount: 7},
        {id: 3, post: "Good one", likeCount: 16},
    ],
    profile: {},
    status: '',
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {

    switch (action.type) {
        case ADD_POST: {
            let newPost: PostType = {
                id: new Date().getTime(),
                post: action.newPostElement,
                likeCount: 999
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        }
        case SET_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state
    }
}

export const addPost = (newPostElement: string) => {
    return {
        type: ADD_POST,
        newPostElement
    } as const
}



export const setProfile = (profile: ProfileType) => {
    return {
        type: SET_PROFILE,
        profile
    } as const
}

export const setStatus = (status: string) => {
    return {
        type: SET_STATUS,
        status
    } as const
}

export const getProfile = (userId: number) => (dispatch: any) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setProfile(response.data))
        })
}

export const getUserStatus = (userId: number) => (dispatch: any) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}

export const updateStatus = (status: string) => (dispatch: any) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if(!response.data.resultCode) {
                dispatch(setStatus(status))
            }
        })
}