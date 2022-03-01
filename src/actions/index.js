import thunk from "redux-thunk";
import { LOAD_USERS, LOAD_QUESTIONS, SET_ACTIVE_USER } from "./types";
import { getAllUsers } from "../DATA";
import { getAllQuestions } from "../DATA";
import { useDispatch } from "react-redux";
// users 
export function loadUsers(users) {
  return {
    type: LOAD_USERS, //Actions shoud return types
    users, // users = users: users
  };
}


//questions
export function loadQuestions(questions) {
  return {
    type: LOAD_QUESTIONS,
    questions,
  };
}


// thunk function for combine API functioon
export const getInitialData=() => {
return function(dispatch){
    getAllUsers().then((users) => dispatch(loadUsers(users)));
    getAllQuestions().then((questions) => dispatch(loadQuestions(questions)));
}
   
}


//active user
//questions
export function activeUser(activeUser) {
    return {
      type: SET_ACTIVE_USER,
      activeUser,
    };
  }


  export const setActiveUser=(activeUser) => {
      return function(dispatch){
          dispatch(activeUser(activeUser))

      }
  }