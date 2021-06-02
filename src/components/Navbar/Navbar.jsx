import React from 'react';
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className={s.navbar}>
      <div className={s.menu}><NavLink to="/content" activeClassName={s.activ}>Профиль</NavLink></div>
      <div className={s.menu}><NavLink to="/dialogs" activeClassName={s.activ}>Сообщения</NavLink></div>
      <div className={s.menu}><NavLink to="friends" activeClassName={s.activ}>Друзья</NavLink></div>
      <div className={s.menu}><NavLink to="groups" activeClassName={s.activ}>Группы</NavLink></div>
      <div className={s.menu}><NavLink to="news" activeClassName={s.activ}>Новости</NavLink></div>
      <div className={s.menu}><NavLink to="music" activeClassName={s.activ}>Музыка</NavLink></div>
      <div className={s.menu_last}><NavLink to="settings" activeClassName={s.activ}>Настройки</NavLink></div>
    </div>
  );
}
export default Navbar;