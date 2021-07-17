import {combineReducers, createStore} from "redux";
import profileReduser from "./Profile-reduser";
import dialogsReduser from "./Dialogs-reduser";
import sidebarReduser from "./sidebar-reduser";

let reducers = combineReducers({profileReduser, dialogsReduser, sidebarReduser});
let
    store = createStore(reducers);

export default store;