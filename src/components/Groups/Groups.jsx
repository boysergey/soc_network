import React from 'react';
import s from './Groups.module.css'

function Groups(props) {
  return(
    <div>
      <form>
        <div className={s.form}>
          <label htmlFor="formGroupExampleInput"/>
          <input type="text" className="form-control" id="formGroupExampleInput"
                 placeholder="Введите название ГРУППЫ"/>
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button className="btn btn-primary" type="button">Отправить сообщение</button>
        </div>
      </form>
    </div>
  )
}
export default Groups;