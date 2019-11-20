import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import { withRouter } from 'react-router-dom';
import goBack from '../images/goBack.png'
import question from '../images/question-01.png'


 const Lecture = (props) => {
   const {pathNum} = props.match.params ;
   const { map } = props.location.state
   
  
  

  return (
    <div className="container-lecture">
      <button  className="goback-icon"onClick={props.history.goBack}><img src={goBack} width="50px" alt="go back"/></button>
      <div className="container-story">
      <h1 className="story-title">{map.story.title}</h1>
      <h2 className="story-part">Parte {(pathNum * 1 + 1)}</h2>
      <p className="story-text">{map.story.paragraph[pathNum].text}</p>
      </div>

      {map.completePath === (pathNum*1+1)  ? <Link className="lecture-questions"to={`/travelMap/${map._id}/path/${pathNum}/questions`}><img src={question} width="60px"></img></Link> : null}
    </div>
  )
}

export default withRouter(Lecture);

