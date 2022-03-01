import { getAllUsers } from "./DATA";
import { getAllQuestions } from "./DATA";
import { useDispatch } from "react-redux";
import { loadUsers } from "./actions"; // it take user return type +users
import { loadQuestions } from "./actions";
import { activeUser } from "./actions";
import { useSelector } from "react-redux"; //Added
import home from "./pages/Home";
import { useEffect } from "react";
import {getInitialData} from './actions'
import { duration } from "@mui/material";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
   // getAllUsers().then((users) => dispatch(loadUsers(users)));
   // getAllQuestions().then((questions) => dispatch(loadQuestions(questions)));
   dispatch(getInitialData());
   
  }, []);

   const userlists = useSelector((state) => state.users);

  //console.log(userlists, "user list");

  ////------------------------------
  const selectedUser = useSelector(state => null);
  console.log(userlists, 'selectedUser');

  //const dispatch = useDispatch();
  const selectedItem=dispatch(activeUser(selectedUser))
  console.log(selectedItem,'selectedItem')
  ////------------------------------

  
 
  return (
    <div className="container" align="center">
      <div className="center">
        <h1>The login screen</h1>
        <p>The select username is used to select a username to login.</p>

        <form>
          <label htmlFor="usersnames">Choose a username:</label>

          <select id="dropdown" onChange={(e) => {selectedUser(e.target.value)}}>
            {Object.values(userlists)?.map((userlist) => (
              <option value={userlist}>{userlist.fullname}</option>
            ))}
          </select>

          <select>
            {Object.values(userlists)?.map((userlist) => (
              <option value={userlist}>{userlist.fullname}</option>
            ))}
          </select>

          <br />
          <br />
          <input type="submit" defaultValue="Submit"></input>
        </form>
      </div>
    </div>
  );
}

export default App;
