import React from 'react';
import s from './MyPost.module.css'
import Post from './Post'

function MyPost() {
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
            <button className="btn btn-primary" type="button">Отправить сообщение</button>
          </div>
        </form>
      </div>
      <Post/>
    </div>

);
}

export default MyPost;