import React from 'react';
import {addPost, PostType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";

// export type MyProfilePageType = {
//     store: any
// }
//
// const MyPostsContainer = () => {
//
//     // let state = props.store.getState()
//
//     return (
//         <>
//             {
//             (store: any) => {
//                 let addPost = () => {
//                     store.dispatch(addPostAC())
//                 }
//
//                 let onPostChange = (text: any) => {
//                     store.dispatch(updateNewPostTextAC(text))
//                 }
//                 return        <MyPosts
//                     updateNewPostText={onPostChange}
//                     addPost={addPost}
//                     posts={store.getState().profilePage.posts}
//                     newPostText={store.getState().profilePage.newPostText}
//                 />
//             }
//         }
//         </>
//     );
// }
//
// export default MyPostsContainer;

type mapStatePropsType = {
    posts: PostType[]
}

type mapDispatchPropsType = {
    addPost: (newPostElement: string) => void
}

export type MyPostsPropsType = mapStatePropsType & mapDispatchPropsType

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        posts: state.profilePage.posts,
    }
}

const mapDispatchToProps = (dispatch: any): mapDispatchPropsType => {
    return {
        addPost: (newPostElement: string) => {
            dispatch(addPost(newPostElement))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


