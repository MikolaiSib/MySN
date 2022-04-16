import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControl";

type FormDataType = {
    newPostElement: string
}

const maxLengthCreator10 = maxLengthCreator(10)

const MyPosts = (props: MyPostsPropsType) => {


    // let newPostElement = React.createRef<HTMLTextAreaElement>();
    //
    // let onAddPost = () => {
    //     props.addPost()
    // }
    //
    // let onPostChange = () => {
    //     let text = newPostElement.current?.value
    //     props.updateNewPostText(text)
    // }

    let addNewPost = (values: any) => {
        props.addPost(values.newPostElement)
    }

    return (
        <div className={s.content}>
            <div>
                <h3>
                    my post
                </h3>
                <div>
                    <AddPostReduxForm onSubmit={addNewPost}/>
                    {/*<div>*/}
                    {/*    <textarea onChange={onPostChange}*/}
                    {/*              ref={newPostElement}*/}
                    {/*              value={props.newPostText}/>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <button onClick={onAddPost}>add post</button>*/}
                    {/*</div>*/}
                </div>
                <div className={s.posts}>
                    <div>
                        {props.posts.map(p =>
                            <Post key={p.id} post={p.post} likeCount={p.likeCount} id={p.id}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

const AddPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newPostElement' placeholder='enter post' validate={[required, maxLengthCreator10]}/>
            </div>
            <div>
                <button>
                    add post
                </button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm<FormDataType>({
    form: 'profileAddPost'
})(AddPostForm)


export default MyPosts;


