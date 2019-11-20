import React from 'react'
import { Link } from 'react-router-dom';
import goBack from '../images/goBack.png'


const NotFound = () => {
  return (
    <div className='not-found'>
      
      <Link className='goback-icon' to={'/homePage'}><img src={goBack} width='50px' alt='go back'/></Link>

    </div>
  )
}

export default NotFound