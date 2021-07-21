import React from 'react';
import s from './Friends.module.css'
import DialogItem from "../Dialogs/Dialogitem/Dialogsitem";

function Friends(props) {

  return(
   <div className={s.block}>
       {props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)}
   </div>
  )
}
export default Friends;