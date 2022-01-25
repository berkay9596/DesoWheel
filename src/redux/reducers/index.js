import { combineReducers } from "redux";
import profilesReducers from './profilesReducers'

export default combineReducers({
  users: profilesReducers,
});
