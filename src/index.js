import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  { id: 1, message: 'Приветик', likesCount:85},
  { id: 2, message: 'Как жизнь Дружище?', likesCount:12 },
  { id: 3, message: 'Все отлично!!!', likesCount:1 },
  { id: 4, message: 'Чем занимаешься?', likesCount:2 },
  { id: 5, message: 'Делаю уроки.', likesCount:21 },
  { id: 6, message: 'Помочь?', likesCount:6 },
  { id: 7, message: 'Нет, спасибо.', likesCount:41 },
  { id: 8, message: 'Если что, приши, помогу.', likesCount:5 },
]
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
  { id: 7, message: 'Нет, спасибо, я сам' },
  { id: 8, message: 'Если что, приши, помогу.' },
]

ReactDOM.render(
  <React.StrictMode>
    <App postsData = {postsData} dialogsData = {dialogsData} messagesData = {messagesData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
