import React from 'react'
import {Container, Col, Row, Button} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';

import SidebarCreateEvent from '../photos/Icons/create-event-sidebar.svg';
import SidebarPotluckInvite from '../photos/Icons/potluck-invite-sidebar.svg';
import SidebarDashboardIcon from '../photos/Icons/dashboard-eye-sidebar.svg';
import SidebarLogoutIcon from '../photos/Icons/logout-sidebar.svg';

const Home = () => {
  const handleLogout = () => {
    localStorage.removeItem('token')
    window.location.reload()
  }

  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-sidebar">
          <div className="dashboard-sidebarContainer">
            <h4 className="dashboard-welcome">Welcome Back, First Name</h4>

            <h4 className="dashboard-actions"><img className="sidebarIcon" src={SidebarCreateEvent} alt="Create Event Icon"/>Create Event</h4>
            <h4 className="dashboard-actions"><img className="sidebarIcon" src={SidebarPotluckInvite} alt="Create Event Icon"/>No Potluck Invite</h4>
            <hr />

            <Button className="dashboard-button sidebarButton"><img className="sidebarIcon buttonIcon" src={SidebarDashboardIcon} alt="Create Event Icon"/>Dashboard</Button>
            <Button className="dashboard-logout sidebarButton" onClick={handleLogout}><img className="sidebarIcon buttonIcon" src={SidebarLogoutIcon} alt="Create Event Icon"/>Log Out</Button>

          </div>
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
