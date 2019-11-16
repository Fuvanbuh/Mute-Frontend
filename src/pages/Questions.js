// import React from 'react'
// // import mapService from '../services/map-service'

// const Questions = (props) => {
//   console.log(props)
//   const idMap = props.match.params.idMap

//   return (
//     <div>
//       <h1>questions</h1>
//       {/* <p>{map.story.paragraph[pathNum].text}</p> */}
//     </div>
//   )
// }

// export default Questions

import mapService from '../services/map-service'
import React, { Component } from 'react'

class Questions extends Component {
  state={
    map: null,
    selectedOption: "option1"
  }

  componentDidMount = async () => {
    const { idMap } = this.props.match.params

    const oneMap = await mapService.getTheMap(idMap);
    this.setState({
      map: oneMap
    })
  }
  
  render() {
    const {pathNum} = this.props.match.params
    const {map} = this.state
    console.log(map)
    return (
      <div>
        <h1>questions</h1>
        { map &&
        <div>
          <p>{map.story.paragraph[pathNum].question}</p>
          <form onSubmit={this.handleFormSubmit}>
            <label>
              <input type="radio" value="option1"
                checked={this.state.selectedOption === 'option1'}
                onChange={this.handleOptionChange} />{map.story.paragraph[pathNum].answer1}</label>

            <label>
              <input type="radio" value="option2"
                checked={this.state.selectedOption === 'option2'}
                onChange={this.handleOptionChange} /> {map.story.paragraph[pathNum].answer2}</label>

            <label>
              <input type="radio" value="option3"
                checked={this.state.selectedOption === 'option3'}
                onChange={this.handleOptionChange} /> {map.story.paragraph[pathNum].answer3} </label>

            <button type="submit">Enviar</button>
          </form>
        </div>
          
        }
      </div>
    )
  }
}

export default Questions