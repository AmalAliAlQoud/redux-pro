import { combineReducers } from "redux";
import users from "./users"; // without {} because it is export default
import questions from "./questions";
import activeUser from './activeUser'


/*
export default combineReducers({
    users,
    questions,
})
*/

export const reducers=combineReducers({users,questions,activeUser});