import axios from 'axios';
import React from 'react';
import {Header} from "./Header";
import {setUserData} from "../../redux/auth-reducer";
import { connect } from 'react-redux';
import {ProfileType} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";

class HeaderContainer extends React.Component<any, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if(response.data.resultCode === 0){
                    let {email, id, login} = response.data.data
                    this.props.setUserData(email, id, login)
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}

export type mapStatePropsType = {
    isAuth: boolean
    login: string | null
}

// type mapDispatchPropsType = {
//     setProfile: (profile: ProfileType) => void
// }

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, {setUserData}) (HeaderContainer)



