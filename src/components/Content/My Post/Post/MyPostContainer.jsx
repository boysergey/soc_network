import React from 'react';
import s from './MyPost.module.css'
import Post from './Post'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/Profile-reduser";
import MyPost from "./MyPost";


const MyPostContainer = (props) => {
    let messageElements =
        props.postsData.map(posts => <Post message={posts.message} likesCount={posts.likesCount} id={posts.id}/>)
    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator());
        newPostElement.current.value = '';
    }

    let onPostChange = () => {
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action)
    }
    return (
        <MyPost updateNewPostText={o}/>
    );
}
export default MyPostContainer;