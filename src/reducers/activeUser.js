//import {questions} from '../DATA';
import {SET_ACTIVE_USER} from '../actions/types'

export default function activeUser(state=[],action){
  //  console.log(state,'state from reducer');
   // console.log(action,'action from reducer');

  //  loaders.state=DATA.users;
if(action.type===SET_ACTIVE_USER){
 //console.log(action.users)// change it
return action.activeUser;  // how to connect users data with actins
}else{
return state;
}
 
}

