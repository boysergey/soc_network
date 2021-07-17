const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {

    dialogsData: [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Viktor'},
        {id: 4, name: 'Valera'},
        {id: 5, name: 'Igor'},
        {id: 6, name: 'Irina'},
        {id: 7, name: 'Tatyana'},
        {id: 8, name: 'Dmitriy'},
    ],
    messagesData: [
        {id: 1, message: 'Привет'},
        {id: 2, message: 'Как жизнь?'},
        {id: 3, message: 'Все отлично!!!'},
        {id: 4, message: 'Чем занимаешьяс?'},
        {id: 5, message: 'Делаю уроки.'},
        {id: 6, message: 'Помочь?'},
        {id: 7, message: 'Нет, спасибо, я сам'},
        {id: 8, message: 'Если что, пиши, помогу.'},
    ],
    newMessageBody: ''
}

const dialogsReduser = (state = initialState, action) => {
    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.messagesData.push({id: 10, message: body});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => {

    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageTextCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: body
    }
}

export default dialogsReduser;