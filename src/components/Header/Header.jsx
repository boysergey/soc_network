import React from 'react';
import s from './Header.module.css'

function Header() {
  return (
    <header className={s.header}>
      <a href="#">
        <img className={s.logo}
             src="https://www.pngfind.com/pngs/m/84-841512_hacking-logo-png-logo-hacker-png-transparent-png.png"
             alt="logo"/>
      </a>
      <h1>Native people</h1>
      <div className={s.login}>
        <div className={s.menu}><a href="#">Вход</a></div>
        <div className={s.menu}><a href="#">Регистрация</a></div>
      </div>
    </header>)
}


export default Header;