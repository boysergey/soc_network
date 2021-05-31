import React from 'react';

function Navbar() {
  return (
    <div className="navbar">
      <div className="menu first"><a href="#">Профиль</a></div>
      <div className="menu"><a href="#">Сообщения</a></div>
      <div className="menu"><a href="#">Группы</a></div>
      <div className="menu"><a href="#">Новости</a></div>
      <div className="menu"><a href="#">Музыка</a></div>
      <div className="menu last"><a href="#">Настройки</a></div>
    </div>
  );
}
export default Navbar;