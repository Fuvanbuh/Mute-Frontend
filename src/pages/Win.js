import React, { Component } from 'react'
import star from '../images/price-01.png'
import mute from '../images/mute-01.png'


export default class Win extends Component {
  
  render() {
    //const {price} = this.props.location.state.map.story.theme
    // console.log(this.props.location.state.map.story)
    return (
      <div>
        <h1>win</h1>
        <img src={star} alt="star"/>
        <img src={mute} alt="mute"/>
        
      </div>
    )
  }
}

