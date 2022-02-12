import {ActionsTypes, PostType, ProfilePageType} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export type ProfileActionsTypes = ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostTextAC>

let initialState = {
    newPostText: "",
    posts: [
        {id: 1, post: "Hi one", likeCount: 33},
        {id: 2, post: "Hello one", likeCount: 7},
        {id: 3, post: "Good one", likeCount: 16},
    ],
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: new Date().getTime(),
                post: state.newPostText,
                likeCount: 999
            }
            state.posts.push(newPost)
            state.newPostText = ''
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            break;
    }
    return state
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
