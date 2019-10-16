import React from "react";

export default function UserCard(props) {
  const { user_id, username, email, full_name } = props.user;
  // console.log(user_id, full_name, email, username);
  return (
    <div>
      <p>{user_id + " " + full_name + " " + email + " " + username}</p>
    </div>
  );
}
