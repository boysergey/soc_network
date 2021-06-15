// noinspection BadExpressionStatementJS

import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom';
import Friends from "../Friends/Friends";
import DialogItem from "../Dialogs/Dialogitem/Dialogsitem";
import Photo from "../Photo/Photo";


function Navbar(props) {
    let dialogsElements;

    return (
        <div className={s.navbar}>
            <div className={s.menu}><NavLink to="/content" activeClassName={s.active}>Профиль</NavLink></div>
            <div className={s.menu}><NavLink to="/dialogs" activeClassName={s.active}>Сообщения</NavLink></div>
            <div className={s.menu}><NavLink to="/groups" activeClassName={s.active}>Группы</NavLink></div>
            <div className={s.menu}><NavLink to="/news" activeClassName={s.active}>Новости</NavLink></div>
            <div className={s.menu}><NavLink to="/music" activeClassName={s.active}>Музыка</NavLink></div>
            <div className={s.menu_friends}><NavLink to="/friends" activeClassName={s.active}>Друзья</NavLink></div>
            {/*<Friends dialogsData={props.dialogsData}/>*/}
            <Photo dialogsData={props.dialogsData}/>
            <div className={s.menu_last}><NavLink to="/settings" activeClassName={s.active}>Настройки</NavLink></div>
        </div>
    );
}

export default Navbar;