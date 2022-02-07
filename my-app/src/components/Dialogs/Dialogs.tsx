import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

type DialogsPagePropsType = {
    dialogsPage: DialogsPageType
}

export const Dialogs = (props: DialogsPagePropsType) => {
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
        </div>
    );
}


