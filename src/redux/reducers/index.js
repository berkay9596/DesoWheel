import { combineReducers } from "redux";
import profilesReducers from './profilesReducers'
import darkModeReducers from "./darkModeReducers";

export default combineReducers({
  users: profilesReducers,
  darkMode: darkModeReducers,
});
