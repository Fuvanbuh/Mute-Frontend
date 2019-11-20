import mapService from '../services/map-service'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import goBack from '../images/goBack.png'

class Questions extends Component {
  state={
    map: null,
    selectedOption: "",
    correctMessage: "",
    incorrectMessage: ""
  }

  componentDidMount = async () => {
    const { idMap } = this.props.match.params
    const oneMap = await mapService.getTheMap(idMap);
    this.setState({
      map: oneMap
    })
    
  }

  handleFormSubmit  = async (event) => {
    event.preventDefault()
    const { idMap } = this.props.match.params
    const correct = this.state.map.story.paragraph[this.props.match.params.pathNum].correct
    if(this.state.selectedOption === correct){
      this.setState({
        correctMessage: "Muy bien!"
      })
      
      await mapService.modifyPathMap(idMap)
    } else {
      this.setState({
        incorrectMessage: "No es correcta"
      })
    }
   
  }

  

  handleOptionChange = (event) => {    
    this.setState ({
      selectedOption: event.target.value
    })
  }


  render() {
    const {pathNum} = this.props.match.params
    const {map} = this.state
   
    return (
      <div className='container-general-questions' >
        <button  className='btn-none goback-icon' onClick={this.props.history.goBack}><img src={goBack} width='50px' alt='go back'/></button>
        <div className='container-questions'>
          <h1>Responde la pregunta:</h1>
        { map &&
        <div>
          <p>{map.story.paragraph[pathNum].question}</p>
          <form onSubmit={this.handleFormSubmit}>
            <label>
              <input type="radio" value="answer1"
                checked={this.state.selectedOption === 'answer1'}
                onChange={this.handleOptionChange}/>{map.story.paragraph[pathNum].answer1}</label>

            <label>
              <input type="radio" value="answer2"
                checked={this.state.selectedOption === 'answer2'}
                onChange={this.handleOptionChange}/> {map.story.paragraph[pathNum].answer2}</label>

            <label>
              <input type="radio" value="answer3"
                checked={this.state.selectedOption === 'answer3'}
                onChange={this.handleOptionChange}/> {map.story.paragraph[pathNum].answer3} </label>

            <button className='btn-none' type="submit">Comprobar</button>
          </form>         
          {this.state.correctMessage?
          <div>
          <h5>{this.state.correctMessage}</h5>
           <Link to={`/travelMap/${map._id}`}>Siguiente</Link>
          </div>          
          : <h5>{this.state.incorrectMessage}</h5>
          }
        </div>
          
        }
      </div>
      </div>
    )
  }
}

export default Questions