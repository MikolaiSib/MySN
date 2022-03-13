import {ActionsTypes} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_PROFILE = "SET_PROFILE";

export type ProfileActionsTypes = ReturnType<typeof addPost> |
    ReturnType<typeof updateNewPostText> | ReturnType<typeof setProfile>

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
    newPostText: string
    posts: Array<PostType>
    profile: ProfileType | object
}


let initialState: ProfilePageType = {
    newPostText: "",
    posts: [
        {id: 1, post: "Hi one", likeCount: 33},
        {id: 2, post: "Hello one", likeCount: 7},
        {id: 3, post: "Good one", likeCount: 16},
    ],
    profile: {}
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {

    switch (action.type) {
        case ADD_POST: {
            let newPost: PostType = {
                id: new Date().getTime(),
                post: state.newPostText,
                likeCount: 999
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {

            return {...state, newPostText: action.newText}
        }
        case SET_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}

export const addPost = () => {
    return {
        type: ADD_POST
    } as const
}

export const updateNewPostText = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}

export const setProfile = (profile: ProfileType) => {
    return {
        type: SET_PROFILE,
        profile
    } as const
}
