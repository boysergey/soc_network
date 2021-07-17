import profileReduser from "./Profile-reduser";
import dialogsReduser from "./Dialogs-reduser";
import sidebarReduser from "./sidebar-reduser";

let store = {
    _state: {
        postsData: [
            {id: 1, message: 'Приветик', likesCount: 85},
            {id: 2, message: 'Как жизнь Дружище?', likesCount: 12},
            {id: 3, message: 'Все отлично!!!', likesCount: 1},
            {id: 4, message: 'Чем занимаешься?', likesCount: 2},
            {id: 5, message: 'Делаю уроки.', likesCount: 21},
            {id: 6, message: 'Помочь?', likesCount: 6},
            {id: 7, message: 'Нет, спасибо.', likesCount: 41},
            {id: 8, message: 'Если что, приши, помогу.', likesCount: 5},
        ],
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
        newPostText: '',
        newMessageBody: '',
        sidebar:{}
    },
    _callSubscriber() {
        console.log('change');
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state = profileReduser(this._state, action)
        this._state = dialogsReduser(this._state, action)
        this._state = sidebarReduser(this._state, action)
        this._callSubscriber(this._state);
    }



}
export default store;
window.store = store;
