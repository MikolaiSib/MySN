import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


// type MyProfilePagePropsType = {
//     store: any
// }

export const Profile = (props: any) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner} savePhoto={props.savePhoto} updateProfile={props.updateProfile}/>
            <MyPostsContainer/>
        </div>
    );
}





