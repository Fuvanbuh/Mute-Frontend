import React from 'react'
import { Link } from 'react-router-dom';
import mute from '../images/mute-01.png'


const Welcome = () => {
  return (
    <div>
      <h1>Mute</h1>
      <img width='150'src={mute} alt="mute" />
      <Link to="/login">Iniciar Sesión</Link>
      <Link to="/signup">Registrarse</Link>

    </div>
  )
}

export default Welcome
