import React from 'react'
import {Container, Col, Row, Button} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';

const Home = () => {
  const handleLogout = () => {
    localStorage.removeItem('token')
    window.location.reload()
  }

  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-sidebar">
          <h4>Welcome Back, First Name</h4>
          <Button className="logout-button" onClick={handleLogout}>Log Out</Button>
        </div>
        
        <div className="dasboard-content">
          <h1>Your Upcoming Events</h1>
          <h1>Your Past Events</h1>
        </div>
      </div>
    </>
  )
}

export default Home
