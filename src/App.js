import React, { useContext } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import { Container } from 'reactstrap'

import UserContext from './contexts/UserContext'
import EventContext from './contexts/EventContext'
import Navigation from './components/Navigation/Navigation'
import Home from './components/Home'
import CreateAccount from './components/CreateAccount/CreateAccount'
import Login from './components/Login/Login'
import UsersList from './components/Users/UsersList'
import EventsList from './components/Events/EventsList'
import EventPage from './components/Events/EventPage'
import UserPage from './components/Users/UserPage'
import PrivateRoute from './components/PrivateRoute'

function App() {
  const event = useContext(EventContext)
  const user = useContext(UserContext)

  return (
    <EventContext.Provider value={event}>
      <UserContext.Provider value={user}>
        <div className='App'>
          <Navigation />
          <Switch>
            <Container className="contentContainer">
              <PrivateRoute exact path='/Home' component={Home} />
              <Route exact path='/' component={Login} />
              <Route exact path='/CreateAnAccount' component={CreateAccount} />
              <PrivateRoute exact path='/Events' component={EventsList} />
              <PrivateRoute path='/Events/:id' component={EventPage} />
              <PrivateRoute exact path='/Users' component={UsersList} />
              <PrivateRoute exact path='/Users/:id' component={UserPage} />
            </Container>
          </Switch>
        </div>
        <div style={{ marginTop: '200px' }}>
          <p>In Playground.</p>
        </div>
      </UserContext.Provider>
    </EventContext.Provider>
  )
}

export default App
