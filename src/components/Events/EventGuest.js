import React from "react";
import { Link } from "react-router-dom";
export default function EventGuest(props) {
  // console.log(props.guest);
  // const {attending, full_name, user_id } = props.guest;

  return (
    <div className="guestCard">
      {/* Guest Card */}
      {props.guest.full_name ? (
        <Link to={`/Users/${props.guest.user_id}`}>
          <p>{props.guest.full_name}</p>
        </Link>
      ) : (
        <p>{""}</p>
      )}
      {/* <p>{props.guest.attending ? "Yes" : "No"}</p> */}
      {/* <p>{props.guest.user_id ? props.guest.user_id : ""}</p> */}
    </div>
  );
}
