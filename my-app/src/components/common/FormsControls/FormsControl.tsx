import React from 'react';
import s from './FormsControl.module.css'
import {Field} from "redux-form";

const FormControl: React.FC<any> = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error

    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                {children}
            </div>
            <div>
                {hasError && <span>{error}</span>}
            </div>
        </div>
    );
}

export const Textarea: React.FC<any> = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
};

export const Input: React.FC<any> = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
};

export const createField = (placeholder: any, name: any, component: any, validate: any, type?: any, text?: any) => {
    return <div>
        <Field placeholder={placeholder} name={name} component={component}
               validate={validate} type={type}/> {text}
    </div>
}
