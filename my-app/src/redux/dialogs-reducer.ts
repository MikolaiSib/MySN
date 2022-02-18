import {ActionsTypes} from "./store";

const ADD_MESS = 'ADD-MESS';
const UPDATE_NEW_MESS_TEXT = "UPDATE-NEW-MESS-TEXT";

export type DialogsActionsTypes = ReturnType<typeof addMessAC> | ReturnType<typeof updateNewMessTextAC>

export type DialogType = {
    id: number | string
    name: string
}

export type MessageType = {
    id: number
    mess: string
}

export type DialogsPageType = {
    dialogs: DialogType[]
    messages: Array<MessageType>
    newMessText: string
}

let initialState: DialogsPageType = {
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
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes): DialogsPageType => {

    switch (action.type) {
        case ADD_MESS:
            let newMess: MessageType = {
                id: new Date().getTime(),
                mess: state.newMessText
            }
            return {
                ...state,
                messages: [...state.messages, newMess],
                newMessText: ''
            }
        case UPDATE_NEW_MESS_TEXT:
            return {...state, newMessText: action.newMess}
        default:
            return state
    }
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

