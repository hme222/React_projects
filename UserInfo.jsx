import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'

const UserInfo = () => {
  const { id } = useParams();

  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await res.json();
      setUser(data);
    };
    fetchUser();
  }, []);

  return (
    <>
      {/* {display the id from the URL} */}
      <h1>{id}. {user.name}</h1>
      <p>Email: {user.email}</p>
      {/* <p> catchphrase: {user.company} </p> */}
      <Link to="/"><button>Go Back</button></Link>
    </>
  );
};

export default UserInfo;