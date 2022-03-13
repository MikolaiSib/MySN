import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {addPost, PostType, ProfileType, setProfile, updateNewPostText} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";

// type MyProfilePagePropsType = {
//     store: any
// }

class ProfileContainerComponent extends React.Component<any, any>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/18443`)
            .then(response => {
                this.props.setProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} />
        );
    }

}

type mapStatePropsType = {
    profile: ProfileType | object
}

type mapDispatchPropsType = {
    setProfile: (profile: ProfileType) => void
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        profile: state.profilePage.profile,
    }
}

export const ProfileContainer = connect(mapStateToProps, {
   setProfile
})(ProfileContainerComponent)




