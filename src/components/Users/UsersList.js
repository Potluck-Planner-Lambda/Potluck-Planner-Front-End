import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import "./UsersList.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import Sidebar from "../Dashboard/Sidebar";
// import {axiosWithAuth} from "../../utils/axiosWithAuth"
export default function UsersList() {
  //Will eventually comment out to use imported axiosWithAuth
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
      <Sidebar />
      {users.map(user => (
        <Link to={`/Users/${user.user_id}`}>
          <UserCard user={user} id={user.user_id} />
        </Link>
      ))}
    </div>
  );
}
