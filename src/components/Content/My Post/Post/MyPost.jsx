import React from 'react';
import s from './MyPost.module.css'
import Post from './Post'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/State";



const MyPost = (props) => {
    let messageElements =
        props.postsData.map(posts => <Post message={posts.message} likesCount={posts.likesCount} id={posts.id}/>)
    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator());
        newPostElement.current.value = '';
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action)
    }
    return (
        <div>
            <div className={s.posts}>
                <div className={s.post_title}>
                    Мои сообщения
                </div>
                <form>
                    <div className={s.form}>
                        <label htmlFor="formGroupExampleInput"/>
                        <input type="text" className="form-control" id="formGroupExampleInput" ref={newPostElement}
                               onChange={onPostChange}
                               value={props.newPostText}/>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button className="btn btn-primary btn-px" type="button" onClick={addPost}>Отправить сообщение
                        </button>
                    </div>
                </form>
            </div>
            <div className="message">
                {messageElements}
            </div>
        </div>
    );
}

export default MyPost;