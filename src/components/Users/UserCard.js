import React, { useState, useEffect } from 'react'
import UserEvents from './UserEvents'
import { axiosWithAuth } from '../../utils/axiosWithAuth'
export default function UserCard(props) {
  const { user_id, username, email, full_name } = props.user
  // const events = props.UserEvents;
  // console.log(user_id, full_name, email, username);
  const [events, setEvents] = useState({})
  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${props.id}`)
      .then(res => {
        // console.log(res.data);
        setEvents(res.data.events)
      })
      .catch(err => console.error(err))
  }, [props.id])
  // console.log(events);
  return (
    <div className='UserCard'>
      <h3 className='title'>{full_name}</h3>
      {/* <p className='user_id'>{user_id}</p> */}
      <p className='username'>{'Nickname: ' + username}</p>
      <p className='email'>{email}</p>
      <UserEvents events={events} />
    </div>
  )
}
