import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

export type MyProfilePageType = {
    updateNewPostText: (text: any) => void
    addPost: () => void
    posts: any[]
    newPostText: string
}

const MyPosts = (props: MyProfilePageType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current?.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.content}>
            <div>
                <h3>
                    my post
                </h3>
                <div>
                    <div>
                        <textarea onChange={onPostChange}
                                  ref={newPostElement}
                                  value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={onAddPost}>add post</button>
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


