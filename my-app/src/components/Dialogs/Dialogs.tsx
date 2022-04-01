import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormDataType = {
    newMessElement: string
}

export const Dialogs = (props: DialogsPropsType) => {

    // let newMessElement = React.createRef<HTMLTextAreaElement>();

    // let addMess = () => {
    //     props.addMess()
    // }

    // let onMessChange = () => {
    //     let mess = newMessElement.current?.value
    //     props.onMessChange(mess)
    // }

    let addNewMess = (values: any) => {
        props.addMess(values.newMessElement)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogs.map(n =>
                    <DialogItem key={n.id} name={n.name} id={n.id.toString()}/>
                )}
            </div>

            <div className={s.messages}>
                {props.messages.map(m =>
                    <Message key={m.id} mess={m.mess} id={m.id}/>)}
            </div>
            <AddMessReduxForm onSubmit={addNewMess} />
        </div>
    );
}

const AddMessForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newMessElement' placeholder='enter mess'/>
            </div>
            <div>
                <button>
                    add mess
                </button>
            </div>
        </form>
    )
}

const AddMessReduxForm = reduxForm<FormDataType>({
    form: 'dialogAddMess'
})(AddMessForm)


