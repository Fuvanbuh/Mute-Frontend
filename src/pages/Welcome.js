import React from 'react'
import { Link } from 'react-router-dom';
import mute from '../images/mute-01.png'


const Welcome = () => {
  return (
    <div>
      <h1>Welcome Page</h1>
      <img width='150'src={mute} alt="mute" />
      <Link to="/login">Log in</Link>
      <Link to="/signup">Sign up</Link>

    </div>
  )
}

export default Welcome
