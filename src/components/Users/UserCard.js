import React from "react";

export default function UserCard(props) {
  const { user_id, username, email, full_name } = props.user;
  // console.log(user_id, full_name, email, username);
  return (
    <div className="UserCard">
      <h3 className="title">{full_name}</h3>
      <p className="user_id">{user_id}</p>
      <p className="username">{"Nickname: " + username}</p>
      <p className="email">{email}</p>
    </div>
  );
}
