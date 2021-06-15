import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom';

function DialogItem(props) {
    return <div className={s.dialog + ' ' + s.active}>
        <img className={s.paint}
             src='https://socialniesety.ru/files/images/components/articles_journal/originals/instagram/422/kak_sdelat_artavatarku_v_instagram_13.jpg'
             alt='avatar'/>
        <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink></div>
}


export default DialogItem;