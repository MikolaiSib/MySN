import React from 'react';
import {Header} from "./Header";
import {getAuth, logout} from "../../redux/auth-reducer";
import { connect } from 'react-redux';
import {AppStateType} from "../../redux/redux-store";

class HeaderContainer extends React.Component<any, any> {

    componentDidMount() {
        this.props.getAuth()
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

export default connect(mapStateToProps, {getAuth, logout}) (HeaderContainer)



