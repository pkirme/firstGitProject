import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UsersList";

function App() {
  const [addUserList, setAddUserList] = useState([]);
  const addUserListHandler = (userName, userAge, clgName) => {
    setAddUserList((preUsers) => {
      return [
        ...preUsers,
        {
          name: userName,
          age: userAge,
          clgName: clgName,
          id: Math.random().toString(),
        },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserListHandler}></AddUser>
      <UserList users={addUserList}></UserList>
    </div>
  );
}

export default App;
