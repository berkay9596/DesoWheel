import { combineReducers } from "redux";
import profilesReducers from './profilesReducers'
import darkModeReducers from "./darkModeReducers";
import userInfoReducer from "./userInfoReducers";

export default combineReducers({
  users: profilesReducers,
  darkMode: darkModeReducers,
  info : userInfoReducer
});
