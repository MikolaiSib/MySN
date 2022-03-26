import React from 'react';
// import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {mapStatePropsType} from "./ProfileContainer";
import {ProfileType} from "../../redux/profile-reducer";
import {Navigate} from "react-router-dom";

// type MyProfilePagePropsType = {
//     store: any
// }

export const Profile = (props: any) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
}





