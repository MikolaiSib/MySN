import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {ActionsTypes, addPostAC, PostType, updateNewPostTextAC} from "../../../redux/state";

export type MyProfilePageType = {
    posts: Array<PostType>
    newPostText: string
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
                                  value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={addPost}>add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    <div>
                        {props.posts.map(p =>
                            <Post post={p.post} likeCount={p.likeCount} id={p.id}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyPosts;


