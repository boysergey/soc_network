import React from 'react';

function Header() {
  return (
    <header className="header">
    <a href="#">
      <img className="logo" src="https://www.pngfind.com/pngs/m/84-841512_hacking-logo-png-logo-hacker-png-transparent-png.png" alt="logo"/>
    </a>
  <div className="login">
    <div className="menu entered"><a href="#">Вход</a></div>
    <div className="menu registration"><a href="#">Регистрация</a></div>
  </div>
    </header>)
}


export default Header;