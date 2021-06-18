import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './Dialogitem/Dialogsitem';
import Message from './Message/Message';

function Dialogs(props) {

    let dialogsElements = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messageElements = props.messagesData.map(message => <Message message={message.message}
                                                                     id={message.id}/>);
    let newPostElement= React.createRef()
    let addPost=() =>{
        let text= newPostElement. current.value;
        alert(text)
    }
    return (
        <div>
            <form>
                <div className={s.form}>
                    <label htmlFor="formGroupExampleInput"/>
                    <input type="text" className="form-control" id="formGroupExampleInput" ref={newPostElement}
                           placeholder="Введите ваше сообщение"/>
                </div>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-primary btn-px" type="button" onClick={addPost}>Отправить сообщение
                    </button>
                </div>
            </form>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {dialogsElements}
                </div>
                < div className={s.messages}>
                    {messageElements}
                </div>
            </div>
        </div>
    );
}

export default Dialogs;