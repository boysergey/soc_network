import React from 'react';
import s from './MyPost.module.css'
import Post from './Post'

const MyPost = (props) => {
    let messageElements =
        props.myPostInfo.map(posts => <Post message={posts.message} likesCount={posts.likesCount}
                                                          id={posts.id}/>)
    let newPostElement = React.createRef()
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    }
    return (
        <div>
            <div className={s.posts}>
                <div className={s.post_title}>
                    Мои сообщения
                </div>
                <form onSubmit={props.addPost}>
                    <div className={s.form}>
                        <label htmlFor="formGroupExampleInput"/>
                        <input type="text" className="form-control" id="formGroupExampleInput" ref={newPostElement}
                               onChange={onPostChange}
                               value={props.newPostText}/>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button className="btn btn-primary btn-px" type="submit">Отправить сообщение
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