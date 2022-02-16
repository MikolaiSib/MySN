import {ActionsTypes} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export type ProfileActionsTypes = ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostTextAC>

export type PostType = {
    id: number
    post: string
    likeCount: number
}

export type ProfilePageType = {
    newPostText: string
    posts: Array<PostType>
}


let initialState: ProfilePageType = {
    newPostText: "",
    posts: [
        {id: 1, post: "Hi one", likeCount: 33},
        {id: 2, post: "Hello one", likeCount: 7},
        {id: 3, post: "Good one", likeCount: 16},
    ],
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType  => {

    switch (action.type) {
        case ADD_POST: {
            let newPost: PostType = {
                id: new Date().getTime(),
                post: state.newPostText,
                likeCount: 999
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        }
        default:
            return state
    }
}

export const addPostAC = () => {
    return {
        type: ADD_POST
    } as const
}

export const updateNewPostTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}
