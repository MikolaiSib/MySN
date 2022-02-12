import React from 'react';
import s from './../Dialogs.module.css';
import {MessageType} from "../../../redux/store";



export const Message = (props: MessageType) => {
    return (
        <div className={s.message}>
            {props.mess}
        </div>
    )
}



