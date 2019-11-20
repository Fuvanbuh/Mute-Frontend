import React, { Component } from 'react'
import star from '../images/price-01.png'
import mute from '../images/mute-01.png'
import Confetti from 'react-confetti'

export default (props) => {
  
  return (
    <div className='container-win'>
        <Confetti  />
        <h1>win!!</h1>
        <img src={star} alt="star" />
        <img className='mute-win' src={mute} alt="mute" />
      

    </div>
  )
}


