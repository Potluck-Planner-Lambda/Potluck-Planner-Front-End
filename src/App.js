import React, { useContext } from 'react'
import './App.css'
import { Route } from 'react-router-dom'

import UserContext from './contexts/UserContext'
import EventContext from './contexts/EventContext'
import Navigation from './components/Navigation'
import Home from './components/Home'
import CreateAccount from './components/CreateAccount'
import Login from './components/Login'

function App() {
  const event = useContext(EventContext)
  const user = useContext(UserContext)

  return (
    <EventContext.Provider value={event}>
      <UserContext.Provider value={user}>
        <div className='App'>
          <h1>In Playground.</h1>
          <Navigation/>
          <Route exact path='/Home' component = { Home } />
          <Route exact path='/Login' component = { Login } />
          <Route exact path='/CreateAnAccount' component = { CreateAccount } />
        </div>
      </UserContext.Provider>
    </EventContext.Provider>
  )
}

export default App
