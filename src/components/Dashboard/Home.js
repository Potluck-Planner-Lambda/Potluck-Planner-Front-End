import React from 'react'

import Sidebar from './Sidebar';
import Content from './Content';

const Home = () => {

  return (
    <>
      <div className="dashboard-container">
        <Sidebar/>
        <Content/>
      </div>
    </>
  )
}

export default Home
