import React, { Component } from 'react'
import { set } from 'mongoose'

export default class Javi extends Component {

  state ={
    mostrarTexto: true
  }

  toggleMostrarTexto = () =>{
this.setState({
  mostrarTexto: !this.state.mostrarTexto
})
  }

  render() {
    return (
      <div>
        {
          mostrarTexto?
          <p onClick={()=> toggleMostrarTexto()}>Soy el texto</p>
          :
          <p onClick= {()=> toggleMostrarTexto()}>Soy las preguntas</p>
          
        }


      </div>
    )
  }
}
