import React from 'react';
import profileReduser, {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/Profile-reduser";
import MyPost from "./MyPost";
import StoreContext from "../../../../storeContext";

const MyPostContainer = () => {
    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState()
                let addPost = (e) => {
                    e.preventDefault();
                    store.dispatch(addPostActionCreator());
                }
                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                }
                return <MyPost updateNewPostText={onPostChange}
                               addPost={addPost}
                               myPostInfo={state.profileReduser.postsData}
                               newPostText={state.profileReduser.newPostText}/>
            }
        }
    </StoreContext.Consumer>

}
export default MyPostContainer;