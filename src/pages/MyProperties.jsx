import React from 'react'
import { Link } from 'react-router-dom'

function MyProperties() {
  return (
    <div className='container'>
      <div className='py-5'>
        <Link
          to='/container/add-property'
          className='btn btn-warning'
        >
          Add New
        </Link>
      </div>
    </div>
  )
}

export default MyProperties
