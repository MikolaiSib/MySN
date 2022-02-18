import {ProfileActionsTypes, profileReducer} from "./profile-reducer";
import {DialogsActionsTypes, dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

// let rerenderET = (state: any) => {
//     console.log('state')
// }

// type MessageType = {
//     id: number
//     mess: string
// }
//
// type DialogType = {
//     id: number | string
//     name: string
// }
//
// type PostType = {
//     id: number
//     post: string
//     likeCount: number
// }
//
// type ProfilePageType = {
//     newPostText: string
//     posts: Array<PostType>
// }
//
// type DialogsPageType = {
//     dialogs: DialogType[]
//     messages: Array<MessageType>
//     newMessText: string
// }
//
//
// export type RootStateType = {
//     profilePage: ProfilePageType
//     dialogsPage: DialogsPageType
//     sidebar: any
// }
//
// export type StoreType = {
//     _state: RootStateType
//     _onChange: () => void
//     subscribe: any
//     getState: () => RootStateType
//     dispatch: (action: ActionsTypes) => void
// }

// type AddPostActionType = {
//     type: 'ADD-POST'
// }

// type AddPostActionType = ReturnType<typeof addPostAC>

// type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>

// type UpdateNewPostTextActionType = {
//     type: 'UPDATE-NEW-POST-TEXT'
//     newText: any
// }

export type ActionsTypes = ProfileActionsTypes | DialogsActionsTypes
// export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType

// export const store: StoreType = {
//     _state: {
//         profilePage: {
//             newPostText: "",
//             posts: [
//                 {id: 1, post: "Hi one", likeCount: 33},
//                 {id: 2, post: "Hello one", likeCount: 7},
//                 {id: 3, post: "Good one", likeCount: 16},
//             ],
//         },
//         dialogsPage: {
//             newMessText: "",
//             messages: [
//                 {id: 1, mess: "Hi"},
//                 {id: 2, mess: "Hello"},
//                 {id: 3, mess: "Good"},
//                 {id: 4, mess: "day"},
//                 {id: 5, mess: "nice day"},
//             ],
//             dialogs: [
//                 {id: 1, name: "Dima"},
//                 {id: 2, name: "Dic"},
//                 {id: 3, name: "One"},
//                 {id: 4, name: "Two"},
//                 {id: 5, name: "Free"},
//             ],
//         },
//         sidebar: {}
//     },
//     _onChange() {
//         console.log('state')
//     },
//     subscribe(callback: any) {
//         this._onChange = callback
//     },
//     getState() {
//         return this._state
//     },
//     dispatch(action: ActionsTypes) {
//
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action)
//
//         this._onChange()
//     }
// }


//
// //@ts-ignore
// window.store = store



