import { combineReducers } from "redux";
import profilesReducers from './profilesReducers'
import darkModeReducers from "./darkModeReducers";
import userInfoReducer from "./userInfoReducers";
import postReducer from "./postReducers";

export default combineReducers({
  users: profilesReducers,
  darkMode: darkModeReducers,
  info : userInfoReducer,
  posts: postReducer
});
