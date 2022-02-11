import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    ActionsTypes,
    addMessAC,
    DialogsPageType,
    updateNewMessTextAC,
} from "../../redux/state";

type DialogsPagePropsType = {
    dialogsPage: DialogsPageType
    newMessText: string
    dispatch: (action: ActionsTypes) => void
}

export const Dialogs = (props: DialogsPagePropsType) => {

    let addMess = () => {
        props.dispatch(addMessAC())
    }

    let onMessChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessTextAC(e.currentTarget.value))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsPage.dialogs.map(n =>
                    <DialogItem name={n.name} id={n.id.toString()}/>
                )}
            </div>
            <div className={s.messages}>
                {props.dialogsPage.messages.map(m =>
                    <Message mess={m.mess} id={m.id}/>)}
            </div>
            <div>
                        <textarea
                            onChange={onMessChange}
                            value={props.newMessText}
                        />
            </div>
            <div>
                <button onClick={addMess}
                >add mess
                </button>
            </div>
        </div>
    );
}


