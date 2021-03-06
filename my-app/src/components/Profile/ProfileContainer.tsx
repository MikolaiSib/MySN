import React, {useEffect} from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    getProfile,
    getUserStatus,
    ProfileType,
    updateStatus,
    savePhoto,
    updateProfile
} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {useParams} from "react-router-dom";
import {compose} from "redux";

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
                userId = props.myUserId//'18443';
                // if (!userId) {
                //     props.history.push('/login') //useHistory()
                // }
            }
            props.getProfile(userId)
            props.getUserStatus(userId)
        }, [userId]
    )


    return (
        <Profile profile={props.profile} status={props.status} updateStatus={props.updateStatus}
                 isOwner={!userId} savePhoto={props.savePhoto} updateProfile={props.updateProfile}/>
    )
}

// let AuthRedirectComponent = (props: any) => {
//     if (!props.isAuth){
//         return <Navigate to="/login"/>
//     }
//     return <ProfileContainerComponent {...props} />
// }


export type mapStatePropsType = {
    profile: ProfileType | object
    status: string
    myUserId: any
    isAuth: any
}

type mapDispatchPropsType = {
    getProfile: any
    getUserStatus: any
    updateStatus: any
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        myUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
    }
}

// let WithUrlDataContainerComponent = withRouter(ProfileContainerComponent)

// function WithUrlDataContainerComponent() {
//     // Get the userId param from the URL.
//     let { userId } = useParams();
//     // ...
// }

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfile, getUserStatus, updateStatus, savePhoto, updateProfile}),
    //withAuthRedirect
)(ProfileContainerComponent)

// export const ProfileContainer = withAuthRedirect(connect(mapStateToProps, {
//     getProfile
// })(ProfileContainerComponent))




