import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import "./UsersList.scss";
import axios from "axios";
export default function UsersList() {
  const axiosWithAuth = () =>
    axios.create({
      baseURL: "https://potluck-planner-bw.herokuapp.com/users/",
      headers: {
        authorization: localStorage.getItem("token")
      }
    });

  const [users, setUsers] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("")
      .then(res => {
        // console.log(res.data);
        setUsers(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  // console.log(users[0]);
  return (
    <div>
      {users.map(user => (
        <UserCard user={user} />
      ))}
    </div>
  );
}
