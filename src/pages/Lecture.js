import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import { withRouter } from 'react-router-dom';

 const Lecture = (props) => {
   const {pathNum} = props.match.params
   const { map } = props.location.state
  

  return (
    <div>
      <button onClick={props.history.goBack}>Back</button>

      <p>{map.story.paragraph[pathNum].text}</p>

      <Link to={`/travelMap/${map._id}/path/${pathNum}/questions`}>Preguntas</Link>
    </div>
  )
}

export default withRouter(Lecture);

