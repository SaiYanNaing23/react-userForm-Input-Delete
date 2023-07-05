import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
function App(){
  const [userdata,setUserData] = useState([]);
  const saveDataHandler = udata =>{
    setUserData((userdata) => [udata,...userdata]);
  }
  return(
    <div>
      <AddUser onSaveData = {saveDataHandler}></AddUser>
      <UserList users = {userdata}></UserList>
    </div>
  )
}

export default App;