import React, { Component } from 'react'
import star from '../images/price-01.png'
import cofreAbierto from '../images/cofre-abierto.png'
import Confetti from 'react-confetti'

export default (props) => {
  
  return (
    <div className='container-win'>
        <Confetti  />
        <h1>Muy bien has ayudado a mute a encontrar el objeto perdido!</h1>
        <img className='star' src={star} alt="star" />
        <img className='mute-win' src={cofreAbierto} alt="Cofre Abierto" />
    </div>
  )
}


