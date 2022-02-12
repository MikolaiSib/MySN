import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../redux/store";



export const DialogItem = (props: DialogType) => {
    return (
        <div>
            <NavLink to={'/dialogs/' + props.id}
                     className={navData => navData.isActive ? s.active : s.dialog}>{props.name}</NavLink>
        </div>
    )
}


