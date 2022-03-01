//import {questions} from '../DATA';
import {LOAD_QUESTIONS} from '../actions/types'

export default function questions(state=[],action){
  //  console.log(state,'state from reducer');
   // console.log(action,'action from reducer');

  //  loaders.state=DATA.users;
if(action.type===LOAD_QUESTIONS){
 //console.log(action.users)// change it
return action.questions;  // how to connect users data with actins
}else{
return state;
}
 
}

