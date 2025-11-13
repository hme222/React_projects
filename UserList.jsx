import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserList = () => {
  //https://jsonplaceholder.typicode.com/users
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <>
      <h1>UserList</h1>
      {users.map((user) => (
        <Link to={`/users/${user.id}`}>
          <h2>{user.username}</h2>
        </Link>
      ))}
    </>
  );
};

export default UserList;
