import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {ActionsTypes, PostType, ProfilePageType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";

export type MyProfilePageType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

const MyPosts = (props: MyProfilePageType) => {

    // let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        props.dispatch(addPostAC())
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextAC(e.currentTarget.value))}

    return (
        <div className={s.content}>
            <div>
                <h3>
                    my post
                </h3>
                <div>
                    <div>
                        <textarea onChange={onPostChange}
                            // ref={newPostElement}
                                  value={props.profilePage.newPostText}/>
                    </div>
                    <div>
                        <button onClick={addPost}>add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    <div>
                        {props.profilePage.posts.map(p =>
                            <Post post={p.post} likeCount={p.likeCount} id={p.id}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyPosts;


