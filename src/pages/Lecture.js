import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import { withRouter } from 'react-router-dom';

 const Lecture = (props) => {
   const {pathNum} = props.match.params ;
   const { map } = props.location.state
   
  
  

  return (
    <div>
      <button onClick={props.history.goBack}>Back</button>
      <h1>{map.story.title}</h1>
      <h2>Parte {(pathNum * 1 + 1)}</h2>
      <p>{map.story.paragraph[pathNum].text}</p>

      {map.completePath === (pathNum*1+1)  ? <Link to={`/travelMap/${map._id}/path/${pathNum}/questions`}>Responde la pregunta</Link> : null}
    </div>
  )
}

export default withRouter(Lecture);

