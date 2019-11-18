import mapService from '../services/map-service'
import React, { Component } from 'react'

class Questions extends Component {
  state={
    map: null,
    selectedOption: ""
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
      await mapService.modifyPathMap(idMap)
    }
    console.log(this.state.map)
  }

  

  handleOptionChange = (event) => {    
    console.log(event.target.value)
    this.setState ({
      selectedOption: event.target.value
    })
  }


  render() {
    const {pathNum} = this.props.match.params
    const {map} = this.state
   
    return (
      <div>
        <h1>questions</h1>
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

            <button type="submit">Enviar</button>
          </form>         
        </div>
          
        }
      </div>
    )
  }
}

export default Questions