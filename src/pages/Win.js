import React from 'react'
import star from '../images/price-01.png'
import cofreAbierto from '../images/cofre-abierto.png'
import Confetti from 'react-confetti'
import { Link } from 'react-router-dom';
import goBack from '../images/goBack.png'



export default () => {

  return (
    <div className='container-general-win'>
      <Link className='goback-icon' to={'/homePage'}><img src={goBack} width='50px' alt='go back' /></Link>

    <div className='container-win'>
      <Confetti />

      <h1>Muy bien has ayudado a mute a encontrar el objeto perdido!</h1>
      <img className='star' src={star} alt="star" />
      <img className='mute-win' src={cofreAbierto} alt="Cofre Abierto" />
    </div>
    </div>
  )
}


