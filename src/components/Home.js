import React from 'react'

const Home = () => {
  const handleLogout = () => {
    localStorage.removeItem('token')
    window.location.reload()
  }

  return (
    <>
      <h1>Home</h1>
      <button onClick={handleLogout}>Log Out</button>
    </>
  )
}

export default Home
