import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './Dialogitem/Dialogsitem';
import Message from './Message/Message';


function Dialogs(props) {
  let dialogsData = [
    { id: 1, name: 'Andrey' },
    { id: 2, name: 'Sasha' },
    { id: 3, name: 'Viktor' },
    { id: 4, name: 'Valera' },
    { id: 5, name: 'Igor' },
    { id: 6, name: 'Irina' },
    { id: 7, name: 'Tatyana' },
    { id: 8, name: 'Dmitriy' },
  ]
  let messagesData = [
    { id: 1, message: 'Привет' },
    { id: 2, message: 'Как жизнь?' },
    { id: 3, message: 'Все отлично!!!' },
    { id: 4, message: 'Чем занимаешьяс?' },
    { id: 5, message: 'Делаю уроки.' },
    { id: 6, message: 'Помочь?' },
    { id: 7, message: 'Нет, спасибо.' },
    { id: 8, message: 'Если что, приши, помогу.' },
  ]
  let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
  let messageElements = messagesData.map(message => <Message message={message.message}
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