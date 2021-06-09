import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './Dialogitem/Dialogsitem';
import Message from './Message/Message';

function Dialogs(props) {

  let dialogsElements = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
  let messageElements = props.messagesData.map(message => <Message message={message.message}
                                                             id={message.id}/>);
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogsElements}
      </div>
      < div className={s.messages}>
        {messageElements}
      </div>
    </div>

  );
}

export default Dialogs;