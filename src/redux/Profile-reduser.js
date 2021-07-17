const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState= {
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
    newPostText: ''
};
const profileReduser = (state= initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 10,
                message: state.newPostText,
                likesCount: 0
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}
export const addPostActionCreator = () => {

    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {

    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}
export default profileReduser;