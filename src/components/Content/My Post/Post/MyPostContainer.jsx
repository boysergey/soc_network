import React from 'react';
import  {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/Profile-reduser";
import MyPost from "./MyPost";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        myPostInfo: state.profileReduser.postsData,
        newPostText: state.profileReduser.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText:(text)=>{
            let action = updateNewPostTextActionCreator(text);
                     dispatch(action);
        }
    }


}
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)
export default MyPostContainer;