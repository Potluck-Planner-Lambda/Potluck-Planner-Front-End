import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
      <div>
        <Link to='/Home'>Home</Link>
      </div>

      <div>
        <Link to='/'>Login</Link>
      </div>

      <div>
        <Link to='/CreateAnAccount'>Create Account</Link>
      </div>
      <div>
        <Link to='/Events'>Events</Link>
      </div>
      <div>
        <Link to='/Users'>Users</Link>
      </div>
    </nav>
  )
}

export default Navigation
