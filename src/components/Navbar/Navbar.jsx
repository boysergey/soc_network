import React from 'react';
import s from './Navbar.module.css'

function Navbar() {
  return (
    <div className={s.navbar}>
      <div className={s.menu_first}><a href="#">Профиль</a></div>
      <div className={s.menu}><a href="#">Сообщения</a></div>
      <div className={s.menu}><a href="#">Друзья</a></div>
      <div className={s.menu}><a href="#">Группы</a></div>
      <div className={s.menu}><a href="#">Новости</a></div>
      <div className={s.menu}><a href="#">Музыка</a></div>
      <div className={s.menu_last}><a href="#">Настройки</a></div>
    </div>
  );
}
export default Navbar;