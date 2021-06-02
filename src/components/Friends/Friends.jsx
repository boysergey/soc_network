import React from 'react';
import s from './Friends.module.css'

function Friends(props) {
  return(
    <form>
      <div className={s.form}>
        <label htmlFor="formGroupExampleInput"/>
        <input type="text" className="form-control" id="formGroupExampleInput"
               placeholder="Введите имя вашего ДРУГА"/>
      </div>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-primary" type="button">Отправить сообщение</button>
      </div>
    </form>
  )
}
export default Friends;