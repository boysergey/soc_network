import React from 'react';
import s from './Music.module.css'

function Music(props) {
  return(
    <div>
      <form>
        <div className={s.form}>
          <label htmlFor="formGroupExampleInput"/>
          <input type="text" className="form-control" id="formGroupExampleInput"
                 placeholder="Любимая песня"/>
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button className="btn btn-primary" type="button">ОК</button>
        </div>
      </form>
    </div>
  )
}
export default Music;