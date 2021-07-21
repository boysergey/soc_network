import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './Dialogitem/Dialogsitem';
import Message from './Message/Message';

const Dialogs = ({dialogsInfo, updateNewMessageBody, sendMessage }) => {

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        updateNewMessageBody(body);
    }
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    <div>{ dialogsInfo.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)}</div>
                </div>
                <div className={s.messages}>
                    { dialogsInfo.messagesData.map(message => <Message message={message.message} id={message.id}/>)}
                </div>
            </div>
            <form onSubmit={sendMessage}>
                <div className={s.form}>


                    <label htmlFor="formGroupExampleInput"/>
                    <input type="text" className="form-control" id="formGroupExampleInput"
                           value={dialogsInfo.newMessageBody}
                           onChange={onNewMessageChange}
                           placeholder="Введите ваше сообщение"/>
                </div>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-primary btn-px" type="submit">Отправить
                        сообщение
                    </button>
                </div>
            </form>

        </div>
    );
}

export default Dialogs;