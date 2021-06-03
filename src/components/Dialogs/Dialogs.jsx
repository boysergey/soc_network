import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

function Dialogs(props) {
    return (
      <div className={s.dialogs}>
        <div className={s.dialogsItem}>
          <div className={s.dialog + ' ' + s.active}><NavLink to='/dialogs/7'>Dmitriy</NavLink></div>
          <div className={s.dialog}><NavLink to='/dialogs/1'>Andrey</NavLink></div>
          <div className={s.dialog}><NavLink to='/dialogs/2'>Sasha</NavLink></div>
          <div className={s.dialog}><NavLink to='/dialogs/3'>Viktor</NavLink></div>
          <div className={s.dialog}><NavLink to='/dialogs/4'>Valera</NavLink></div>
          <div className={s.dialog}><NavLink to='/dialogs/5'>Igor</NavLink></div>
          <div className={s.dialog}><NavLink to='/dialogs/6'> Irina</NavLink></div>
          <div className={s.dialog}><NavLink to='/dialogs/7'>Tatyana</NavLink></div>
        </div>
        <div className={s.messages}>
          <div className={s.message}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Blanditiis dolore esse, hic id optio sapiente sint.
          </div>
          <div className={s.message}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Blanditiis dolore esse,
          </div>
          <div className={s.message}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Blanditiis dolore esse,
          </div>
          <div className={s.message}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Blanditiis dolore esse,
          </div>
          <div className={s.message}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Blanditiis dolore esse,
          </div>
          <div className={s.message}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Blanditiis dolore esse,
          </div>
          <div className={s.message}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Blanditiis dolore esse,
          </div>
          <div className={s.message}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Blanditiis dolore esse,
          </div>
        </div>

      </div>
    );
  }
  export default Dialogs;