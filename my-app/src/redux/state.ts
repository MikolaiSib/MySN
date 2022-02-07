const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let rerenderET = (state: any) => {
    console.log('state')
}

export type MessageType = {
    id: number
    mess: string
}

export type DialogType = {
    id: number | string
    name: string
}

export type PostType = {
    id: number
    post: string
    likeCount: number
}

export type DialogsPageType = {
    dialogs: DialogType[]
    messages: Array<MessageType>
}

export type ProfilePageType = {
    newPostText: string
    posts: Array<PostType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sitebar: any
}

export type StoreType = {
    _state: RootStateType
    _onChange: () => void
    subscribe: any
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

// type AddPostActionType = {
//     type: 'ADD-POST'
// }

// type AddPostActionType = ReturnType<typeof addPostAC>

// type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>

// type UpdateNewPostTextActionType = {
//     type: 'UPDATE-NEW-POST-TEXT'
//     newText: any
// }

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>
// export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType

export const store: StoreType = {
    _state: {
        profilePage: {
            newPostText: "",
            posts: [
                {id: 1, post: "Hi one", likeCount: 33},
                {id: 2, post: "Hello one", likeCount: 7},
                {id: 3, post: "Good one", likeCount: 16},
            ],
        },
        dialogsPage: {
            messages: [
                {id: 1, mess: "Hi"},
                {id: 2, mess: "Hello"},
                {id: 3, mess: "Good"},
                {id: 4, mess: "day"},
                {id: 5, mess: "nice day"},
            ],
            dialogs: [
                {id: 1, name: "Dima"},
                {id: 2, name: "Dic"},
                {id: 3, name: "One"},
                {id: 4, name: "Two"},
                {id: 5, name: "Free"},
            ],
        },
        sitebar: {}
    },
    _onChange() {
        console.log('state')
    },
    subscribe(callback: any) {
        this._onChange = callback
    },
    getState() {
        return this._state
    },
    dispatch(action: any) {
        if (action.type === ADD_POST) {
            let newPost: PostType = {
                id: new Date().getTime(),
                post: this._state.profilePage.newPostText,
                likeCount: 999
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._onChange()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._onChange()
        }
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


//
// //@ts-ignore
// window.store = store



