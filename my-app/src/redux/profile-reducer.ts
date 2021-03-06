import {ActionsTypes} from "./store";
import {profileAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {AppStateType, TypedDispatch} from "./redux-store";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const SET_PROFILE = "SET_PROFILE";
const SET_STATUS = "SET_STATUS";
const SET_PHOTO = "SET_PHOTO";

export type ProfileActionsTypes = ReturnType<typeof addPost>
    | ReturnType<typeof setProfile> | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePost> | ReturnType<typeof setPhoto>

export type PostType = {
    id: number
    post: string
    likeCount: number
}

export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
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
    profile: ProfileType
    status: string
}


let initialState: ProfilePageType = {
    posts: [
        {id: 1, post: "Hi one", likeCount: 33},
        {id: 2, post: "Hello one", likeCount: 7},
        {id: 3, post: "Good one", likeCount: 16},
    ],
    profile: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: '',
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 0,
        photos: {
            small: '',
            large: '',
        },
    },
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
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.id),
            }
        }
        case SET_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case SET_PHOTO: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
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
export const deletePost = (id: number) => {
    return {
        type: DELETE_POST,
        id
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

export const setPhoto = (photos: any) => {
    return {
        type: SET_PHOTO,
        photos
    } as const
}

export const getProfile = (userId: number) => async (dispatch: Dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setProfile(response.data))
}

export const getUserStatus = (userId: number) => async (dispatch: Dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))

}

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    try {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    } catch (e){

    }
}

export const savePhoto = (file: any) => async (dispatch: Dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(setPhoto(response.data.data.photos))
    }
}

export const updateProfile = (contacts: any) => async (dispatch: TypedDispatch, getState: () => AppStateType) => {
    let editProfile = {...getState().profilePage.profile, contacts: {...contacts}}
    let userId = getState().profilePage.profile.userId
    let response = await profileAPI.updateProfile(editProfile)
    if (response.data.resultCode === 0) {
        dispatch(getProfile(userId))
    } else {
        console.log(response.data.messages[0])
    }
}
