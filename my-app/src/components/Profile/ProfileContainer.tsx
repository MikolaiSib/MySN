import React, {useEffect} from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {useParams} from "react-router-dom";

// type MyProfilePagePropsType = {
//     store: any
// }

// class ProfileContainerComponent extends React.Component<any, any>{
//
//     componentDidMount() {
//         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/18443`)
//             .then(response => {
//                 this.props.setProfile(response.data)
//             })
//     }
//
//     render() {
//         return (
//             <Profile {...this.props} />
//         );
//     }
// }

const ProfileContainerComponent = (props: any) => {

    let {userId} = useParams();


    useEffect(() => {
            if (!userId) {
                userId = '18443';
            }
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
                props.setProfile(response.data)
            })
        }, []
    )


    return (
        <Profile profile={props.profile}/>
    )
}


export type mapStatePropsType = {
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

// let WithUrlDataContainerComponent = withRouter(ProfileContainerComponent)

// function WithUrlDataContainerComponent() {
//     // Get the userId param from the URL.
//     let { userId } = useParams();
//     // ...
// }

export const ProfileContainer = connect(mapStateToProps, {
    setProfile
})(ProfileContainerComponent)




