import React from "react";

export default function EventGuest(props) {
  console.log(props.guest);
  // const {attending, full_name, user_id } = props.guest;

  return (
    <div className="guestCard">
      Guest Card
      {/* <p>{props.guest.full_name ? props.guest.full_name : ""}</p>
      <p>{props.guest.attending ? "Yes" : "No"}</p>
      <p>{props.guest.user_id ? props.guest.user_id : ""}</p> */}
    </div>
  );
}
