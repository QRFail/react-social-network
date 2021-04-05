import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validaters/redux_form_validator";
import {Textarea} from "../../../assets/FieldsComponents/FiledsComponents";

const maxLength10 = maxLengthCreator(10);

function MyPosts(props) {


    let posts = props.posts
    let postsElement = posts.map( p => <Post message={p.message} like={p.likeCount}/> )



    let addPost = (formData) => {
        props.addPost(formData.newPostMessage);
    }

    return (
        <div>
            <AddPostReduxForm onSubmit={addPost}/>
            <div className={s.posts}>
                { postsElement }
            </div>
        </div>
    );
}

const AddPostForm = (props) => {

    return (
        <form className={s.newMessage} onSubmit={props.handleSubmit}>
            <div>
                    <Field name='newPostMessage' component={Textarea} validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm({form:'addPostForm'})(AddPostForm);

export default MyPosts;
