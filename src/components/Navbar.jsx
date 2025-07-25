import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../App'

function Navbar() {
  // get the logged in user info
  const { user, setUser } = useContext(AuthContext)

  // get the navigate function reference
  const navigate = useNavigate()

  // logout user
  const onLogout = () => {
    // clear the cache
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('firstName')
    sessionStorage.removeItem('lastName')

    // reset the context
    setUser(null)

    // redirect to login
    navigate('/')
  }

  return (
    <nav
      className='navbar navbar-expand-lg bg-primary'
      data-bs-theme='dark'
    >
      <div className='container-fluid'>
        <Link
          className='navbar-brand'
          to='/container/home'
        >
          Airbnb
        </Link>

        <div
          className='collapse navbar-collapse'
          id='navbarText'
        >
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link
                className='nav-link'
                aria-current='page'
                to='/container/home'
              >
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                aria-current='page'
                to='/container/my-properties'
              >
                My Properties
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                aria-current='page'
                to='/container/bookings'
              >
                Bookings
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                aria-current='page'
                to='/container/profile'
              >
                Profile
              </Link>
            </li>
            <li className='nav-item'>
              <button
                onClick={onLogout}
                className='btn'
              >
                Logout
              </button>
            </li>
          </ul>
          <span className='navbar-text'>Welcome {user.firstName}</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
