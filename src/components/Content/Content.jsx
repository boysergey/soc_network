import React from 'react';
import s from './Content.module.css';
import MyPost from './My Post/Post/MyPost';
import Profileinfo from './Profileinfo/Profileinfo';

function Content(props) {
  return (
    <div>
      <div className={s.fond}>
        <img src="https://images.samsung.com/is/image/samsung/p5/ru/explore/landscape-photography/Explore_How_To_Take_Great_Landscape_Photography_KV.jpg?$ORIGIN_JPG$" alt="fond"/>
      </div>
     <Profileinfo/>
      <MyPost postsData = {props.postsData} addPost={props.addPost} />
    </div>
);
}

export default Content;