import {ActionsTypes} from "./store";

const ADD_MESS = 'ADD-MESS';

export type DialogsActionsTypes = ReturnType<typeof addMessAC>

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
}

let initialState: DialogsPageType = {
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
                mess: action.newMessElement
            }
            return {
                ...state,
                messages: [...state.messages, newMess],
            }
        default:
            return state
    }
}

export const addMessAC = (newMessElement: string) => {
    return {
        type: ADD_MESS,
        newMessElement
    } as const
}



