import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

export type MyProfilePageType = {
    store: any
}

const MyPostsContainer = () => {

    // let state = props.store.getState()

    return (
        <StoreContext.Consumer>
            {
            (store: any) => {
                let addPost = () => {
                    store.dispatch(addPostAC())
                }

                let onPostChange = (text: any) => {
                    store.dispatch(updateNewPostTextAC(text))
                }
                return        <MyPosts
                    updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={store.getState().profilePage.posts}
                    newPostText={store.getState().profilePage.newPostText}
                />
            }
        }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;


