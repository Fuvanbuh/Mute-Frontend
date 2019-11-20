import React from 'react'
import { Link } from 'react-router-dom';
import withAuth from './withAuth';
import plus from '../images/icon-17.png';
import iconDelete from '../images/delete-01.png'
import edit from '../images/edit-01.png'



const CardStory = (props) => {
  const { maps } = props
  
  return (
    <>
      <div className='container-stories'>
        {maps &&
          maps.map((mapa, index) => (
            <div key={index} className="parent-card-story">

              <Link to={`/travelMap/${mapa._id}`} maps={maps}>
                <div className="card-story" style={{ backgroundImage: `url(./images/${mapa.story.theme.background}) `, backgroundSize: "cover"  }}> 
                  <h1>{mapa.story.title}</h1>
                  <img width="50" src={require(`../images/${mapa.story.theme.checkpoint[0]}`)} alt="checkpoint"/>
                </div>
              </Link>

              <div className="buttons-container">
                {mapa.story.creator === props.user._id ? <Link to={`/${mapa.story._id}/editStory`}><img src={edit} width="25" alt="" />
                </Link> : null}
                
                <button className="btn-none" onClick={() => props.deleteOneMap(mapa._id)} ><img src={iconDelete} width="25" alt="trush"/></button>
              </div>

            </div>
          )
          )}

        <div className="card-story plus-container">
          <Link to='/newStory'><img src={plus} width="40" alt=""/></Link>
        </div>
      </div>
    </>

    
  )
}

export default withAuth(CardStory)
