import React from 'react';
// import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type MyProfilePagePropsType = {
    store: any
}

export const Profile = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                // store={props.store}
                // profilePage={props.profilePage}
                     // addPost={props.addPost}
                     // updatePost={props.updatePost}
                     // dispatch={props.dispatch}
            />
        </div>
    );
}





