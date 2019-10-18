import React, { useContext } from 'react'
import './App.css'
import { Route } from 'react-router-dom'

import UserContext from './contexts/UserContext'
import EventContext from './contexts/EventContext'
import Navigation from './components/Navigation/Navigation'
import Home from './components/Home'
import CreateAccount from './components/CreateAccount'
import Login from './components/Login/Login'
import UsersList from './components/Users/UsersList'
import EventsList from './components/Events/EventsList'
import EventPage from './components/Events/EventPage'
import UserPage from './components/Users/UserPage'

function App() {
  const event = useContext(EventContext)
  const user = useContext(UserContext)

  return (
    <EventContext.Provider value={event}>
      <UserContext.Provider value={user}>
        <div className='App'>
          <Navigation />
          <Route exact path='/Home' component={Home} />
          <Route exact path='/' component={Login} />
          <Route exact path='/CreateAnAccount' component={CreateAccount} />
          <Route exact path='/Events' component={EventsList} />
          <Route path='/Events/:id' component={EventPage} />
          <Route exact path='/Users' component={UsersList} />
          <Route exact path='/Users/:id' component={UserPage} />
        </div>
        <div style={{ marginTop: '200px' }}>
          <p>In Playground.</p>
        </div>
      </UserContext.Provider>
    </EventContext.Provider>
  )
}

export default App
