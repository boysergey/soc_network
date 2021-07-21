import React from 'react';
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/Dialogs-reduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


const  mapStateToProps=(state)=>{
    return{
        dialogsInfo:state.dialogsReduser
    }
}
const  mapDispatchToProps=(dispatch)=>{
return{
    updateNewMessageBody:(body)=> {
        dispatch(updateNewMessageTextCreator(body));
        },
    sendMessage:()=> {
        dispatch(sendMessageCreator());
    }
}
}
const  DialogsContainer= connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;