import React, { useEffect, useState } from "react";

const Users = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("./src/users");
      const userList = await response.json();
      setUserList(userList);
      console.log("response is here >>>>>>>>>> ", response);
    };
    fetchUsers();
  }, []);
  return (
    <div>
      <h3>All my users...maybe....</h3>
      <ul>
        {userList.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;