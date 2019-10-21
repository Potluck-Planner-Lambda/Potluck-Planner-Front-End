import React, { useContext, useState, useEffect } from 'react'
import { Col, Row, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './Home.css'
import UserContext from '../../contexts/UserContext'
import SidebarCreateEvent from '../../photos/Icons/create-event-sidebar.svg'
import SidebarPotluckInvite from '../../photos/Icons/potluck-invite-sidebar.svg'
import SidebarDashboardIcon from '../../photos/Icons/dashboard-eye-sidebar.svg'
import SidebarLogoutIcon from '../../photos/Icons/logout-sidebar.svg'
import { Link } from 'react-router-dom'
import { axiosWithAuth } from '../../utils/axiosWithAuth'
const Sidebar = () => {
  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    window.location.reload()
  }
  const [userEvents, setUserEvents] = useState([])
  const { user, setUser } = useContext(UserContext)
  useEffect(() => {
    axiosWithAuth()
      .get(`users/${user.user_id}/events`)
      .then(res => {
        // console.log(res.data);
        setUserEvents(res.data)
        setUser({ ...user, events: res.data.filter(event => event.attending) })
      })
      .catch(err => console.error(err))
  }, [user, setUser])
  const list = userEvents ? (
    userEvents
      .filter(event => event.attending)
      .map(event => (
        <Row>
          <Link to={`/Events/${event.event_id}`}>
            <h4 className='dashboard-actions'>{event.event_name}</h4>
          </Link>
        </Row>
      ))
  ) : (
    <></>
  )
  // console.log(user);
  return (
    <>
      <Col className='dashboard-sidebar'>
        <Col className='dashboard-sidebarContainer'>
          <Row>
            <h3 className='dashboard-welcome'>
              Welcome Back, {user.username}!
            </h3>
            {/* <h4 className="dashboard-welcome">Welcome Back, {localStorage.getItem("username")}</h4> */}
          </Row>

          <Row>
            <Link to={'/CreateEvent'}>
              <h4 className='dashboard-actions'>
                <img
                  className='sidebarIcon'
                  src={SidebarCreateEvent}
                  alt='Create Event Icon'
                />
                Create Event
              </h4>
            </Link>
          </Row>

          <Row>
            <h4 className='dashboard-actions'>
              <img
                className='sidebarIcon'
                src={SidebarPotluckInvite}
                alt='Calendar Icon'
              />
              No Potluck Invites
            </h4>
          </Row>
          <h3 className='dashboard-events'>Upcoming Events:</h3>
          {list}
          <Row className='buttonContainer'>
            <Col>
              <Row>
                <Link to='/Home'>
                  {' '}
                  <Button className='dashboard-button sidebarButton'>
                    <img
                      className='sidebarIcon buttonIcon'
                      src={SidebarDashboardIcon}
                      alt='Dashboard Icon'
                    />
                    Dashboard
                  </Button>
                </Link>
              </Row>

              <Row>
                <Button
                  className='dashboard-logout sidebarButton'
                  onClick={handleLogout}
                >
                  <img
                    className='sidebarIcon buttonIcon'
                    src={SidebarLogoutIcon}
                    alt='User Icon'
                  />
                  Log Out
                </Button>
              </Row>
            </Col>
          </Row>
        </Col>
      </Col>
    </>
  )
}

export default Sidebar
