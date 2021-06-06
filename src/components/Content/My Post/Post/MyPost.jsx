import React from 'react';
import s from './MyPost.module.css'
import Post from './Post'

function MyPost(props) {
  let postsData = [
    { id: 1, message: 'Приветик', likesCount:85},
    { id: 2, message: 'Как жизнь Дружище?', likesCount:12 },
    { id: 3, message: 'Все отлично!!!', likesCount:1 },
    { id: 4, message: 'Чем занимаешься?', likesCount:2 },
    { id: 5, message: 'Делаю уроки.', likesCount:21 },
    { id: 6, message: 'Помочь?', likesCount:6 },
    { id: 7, message: 'Нет, спасибо.', likesCount:41 },
    { id: 8, message: 'Если что, приши, помогу.', likesCount:5 },
  ]
  let messageElements =
    postsData.map(posts => <Post message={posts.message} likesCount={posts.likesCount} id = {posts.id}/>)
  return (

    <div>
      <div className={s.posts}>
        <div className={s.post_title}>
          Мои сообщения
        </div>
        <form>
          <div className={s.form}>
            <label htmlFor="formGroupExampleInput"/>
            <input type="text" className="form-control" id="formGroupExampleInput"
                   placeholder="Введите ваше сообщение"/>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-primary btn-px" type="button">Отправить сообщение</button>
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