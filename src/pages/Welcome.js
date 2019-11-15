import React from 'react'
import { Link } from 'react-router-dom';


const Welcome = () => {
  return (
    <div>
      <h1>Welcome Page</h1>
      <Link to="/login">Log in</Link>
      <Link to="/signup">Sign up</Link>

    </div>
  )
}

export default Welcome
