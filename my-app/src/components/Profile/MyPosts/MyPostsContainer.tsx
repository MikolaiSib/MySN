import React from 'react';
import {addPostAC, PostType, updateNewPostTextAC} from "../../../redux/profile-reducer";
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
    newPostText: string
}

type mapDispatchPropsType = {
    addPost: () => void
    updateNewPostText: (text: any) => void
}

export type MyPostsPropsType = mapStatePropsType & mapDispatchPropsType

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: any): mapDispatchPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (text: any) => {
            dispatch(updateNewPostTextAC(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


