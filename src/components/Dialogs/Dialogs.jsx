import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './Dialogitem/Dialogsitem';
import Message from './Message/Message';
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/Dialogs-reduser";

const Dialogs = (props) => {
    console.log(props)
    let dialogsElements = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messageElements = props.messagesData.map(message => <Message message={message.message}
                                                                     id={message.id}/>);

    let onSendMessageClick = (e) => {
        e.preventDefault();
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.store.dispatch(updateNewMessageTextCreator(body));


    }
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    <div>{dialogsElements}</div>
                </div>
                < div className={s.messages}>
                    {messageElements}
                </div>
            </div>
            <form onSubmit={onSendMessageClick}>
                <div className={s.form}>


                    <label htmlFor="formGroupExampleInput"/>
                    <input type="text" className="form-control" id="formGroupExampleInput"
                           value={props.store.newMessageBody}
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