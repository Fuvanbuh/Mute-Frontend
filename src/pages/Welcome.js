import React from 'react'
import { Link } from 'react-router-dom';
import mute from '../images/mute-01.png'


const Welcome = () => {
  return (
    <div className="container-welcome">
      <h1>mute</h1>
      <img src={mute} alt="mute" />
      <Link className="btn" to="/login">Iniciar Sesión</Link>
      <Link className="btn"to="/signup">Registrarse</Link>

    </div>
  )
}

export default Welcome
