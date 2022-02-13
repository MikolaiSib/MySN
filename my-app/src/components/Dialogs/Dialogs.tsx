import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

type DialogsPagePropsType = {
    onMessChange: (mess: any) => void
    addMess: () => void
    messages: any[]
    newMessText: string
    dialogs: any[]
}

export const Dialogs = (props: DialogsPagePropsType) => {

    let newMessElement = React.createRef<HTMLTextAreaElement>();

    let addMess = () => {
        props.addMess()
    }

    let onMessChange = () => {
        let mess = newMessElement.current?.value
        props.onMessChange(mess)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogs.map(n =>
                    <DialogItem name={n.name} id={n.id.toString()}/>
                )}
            </div>

            <div className={s.messages}>
                {props.messages.map(m =>
                    <Message mess={m.mess} id={m.id}/>)}
            </div>

            <div>
                <textarea
                    onChange={onMessChange}
                    ref={newMessElement}
                    value={props.newMessText}
                />
            </div>
            <div>
                <button onClick={addMess}>
                    add mess
                </button>
            </div>
        </div>
    );
}


