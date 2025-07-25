import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Container() {
  return (
    <div>
      <Navbar />

      {/* the Outlet is used load to the child component */}
      <Outlet />
    </div>
  )
}

export default Container
