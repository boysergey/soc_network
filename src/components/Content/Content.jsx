import React from 'react';
import s from './Content.module.css';
import Profileinfo from './Profileinfo/Profileinfo';
import MyPostContainer from "./My Post/Post/MyPostContainer";

const Content=() =>{
    return (
        <div>
            <div className={s.fond}>
                <img
                    src="https://images.samsung.com/is/image/samsung/p5/ru/explore/landscape-photography/Explore_How_To_Take_Great_Landscape_Photography_KV.jpg?$ORIGIN_JPG$"
                    alt="fond"/>
            </div>
            <Profileinfo/>
            <MyPostContainer />
        </div>
    );
}

export default Content;