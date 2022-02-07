import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/state";

type MyProfilePagePropsType = {
    profilePage: ProfilePageType
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

export const Profile = (props: MyProfilePagePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     // addPost={props.addPost}
                     // updatePost={props.updatePost}
                     dispatch={props.dispatch}
                     newPostText={props.newPostText} />
        </div>
    );
}





