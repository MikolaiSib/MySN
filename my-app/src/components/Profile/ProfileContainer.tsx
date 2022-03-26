import React, {useEffect} from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfile, ProfileType} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
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
                userId = '18443';
            }
            props.getProfile(userId)
        }, []
    )


    return (
        <Profile profile={props.profile}/>
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
}

type mapDispatchPropsType = {
    getProfile: any
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

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfile}),
    withAuthRedirect
)(ProfileContainerComponent)

// export const ProfileContainer = withAuthRedirect(connect(mapStateToProps, {
//     getProfile
// })(ProfileContainerComponent))




