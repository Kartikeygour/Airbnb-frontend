import React, { createContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import MyProperties from './pages/MyProperties'
import Bookings from './pages/Bookings'
import Profile from './pages/Profile'
import { ToastContainer } from 'react-toastify'
import Container from './pages/Container'
import AddProperty from './pages/AddProperty'

// create a context for auth info
export const AuthContext = createContext()

function App() {
  // maintain the user for context
  const [user, setUser] = useState(null)

  return (
    <div>
      <AuthContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route
            path='/'
            element={<Login />}
          />
          <Route
            path='register'
            element={<Register />}
          />

          <Route
            path='/container'
            element={user ? <Container /> : <Login />}
          >
            <Route
              path='home'
              element={<Home />}
            />

            <Route
              path='add-property'
              element={<AddProperty />}
            />

            <Route
              path='my-properties'
              element={<MyProperties />}
            />
            <Route
              path='bookings'
              element={<Bookings />}
            />
            <Route
              path='profile'
              element={<Profile />}
            />
          </Route>
        </Routes>
      </AuthContext.Provider>

      <ToastContainer />
    </div>
  )
}

export default App
