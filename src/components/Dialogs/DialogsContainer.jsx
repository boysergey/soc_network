import React from 'react';
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/Dialogs-reduser";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";

const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {
        (store)=> {
            let state = store.getState()
            let onSendMessageClick = (e) => {
                e.preventDefault();
                store.dispatch(sendMessageCreator());
            }
            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageTextCreator(body));
            }
           return <Dialogs
                updateNewMessageBody={onNewMessageChange}
                sendMessage={onSendMessageClick}
                dialogsInfo={state.dialogsReduser}/>
        }
    }
    </StoreContext.Consumer>

}

export default DialogsContainer;