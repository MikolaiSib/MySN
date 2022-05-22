import React from 'react';
import { InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControl";
import {required} from "../../utils/validators/validators";
import {connect, useSelector} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import s from '../common/FormsControls/FormsControl.module.css'
import {AppStateType} from "../../redux/redux-store";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {

    const captchaUrl = useSelector<AppStateType, string>(state => state.auth.captchaUrl)

    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', Input, [required])}
            {createField('Password', 'password', Input, [required], 'password')}
            {createField(null, 'rememberMe', Input, [], 'checkbox', 'rememberMe')}
            {captchaUrl && <img src={captchaUrl} alt={'no captcha'}/> }
            {captchaUrl &&    createField('Captcha', 'captcha', Input, [required])}
            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)


export const Login = (props: any) => {

    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return (
        <div>
            <h1>
                Login
            </h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login)
