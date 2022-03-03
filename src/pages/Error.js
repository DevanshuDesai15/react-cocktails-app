import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h1>OOPPSSSSS!!!! I guess you are on a wrong page</h1>
        <Link to='/' className='btn btn-primary'>Home Page</Link>
      </div>
    </section>
  )
}

export default Error