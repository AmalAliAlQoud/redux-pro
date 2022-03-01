//import {users} from '../DATA';
import {LOAD_USERS} from '../actions/types'

export default function users(state=[],action){
   // console.log(state,'state from reducer');
   // console.log(action,'action from reducer');

  //  loaders.state=DATA.users;
if(action.type===LOAD_USERS){
 console.log(action.selectedItem)
return action.users;  // how to connect users data with actins
//return action.selectedItem;
}else{
return state;
}
 
}

