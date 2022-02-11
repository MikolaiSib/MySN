const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESS = 'ADD-MESS';
const UPDATE_NEW_MESS_TEXT = "UPDATE-NEW-MESS-TEXT";


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
    newMessText: string
}

export type ProfilePageType = {
    newPostText: string
    posts: Array<PostType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: any
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

export type ActionsTypes = ReturnType<typeof addPostAC> |
    ReturnType<typeof updateNewPostTextAC> | ReturnType<typeof addMessAC> | ReturnType<typeof updateNewMessTextAC>
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
            newMessText: "",
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
        sidebar: {}
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
        } if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._onChange()
        } if (action.type === ADD_MESS) {
            let newMess: MessageType = {
                id: new Date().getTime(),
                mess: this._state.dialogsPage.newMessText
            }
            this._state.dialogsPage.messages.push(newMess)
            this._state.dialogsPage.newMessText = ''
            this._onChange()
        } if (action.type === UPDATE_NEW_MESS_TEXT) {
            this._state.dialogsPage.newMessText = action.newMess
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

export const addMessAC = () => {
    return {
        type: ADD_MESS
    } as const
}

export const updateNewMessTextAC = (newMess: string) => {
    return {
        type: UPDATE_NEW_MESS_TEXT,
        newMess: newMess
    } as const
}


//
// //@ts-ignore
// window.store = store



