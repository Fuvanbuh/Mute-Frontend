import React from 'react'
import { Link } from 'react-router-dom';
import withAuth from './withAuth';
import plus from '../images/icon-17.png'



const CardStory = (props) => {
  const { maps } = props
  console.log(maps)
  return (
    <>
      <div className='container-stories'>
        {maps &&
          maps.map((mapa, index) => (
            <div className='card-story'>
            <Link to={`/travelMap/${mapa._id}`} maps={maps}>
            
               <div key={index} style={{ backgroundImage: `url(./images/${mapa.story.theme.background})` }}> 
                <h1>{mapa.story.title}</h1>
                {mapa.story.creator === props.user._id ? <Link to={`/${mapa.story._id}/editStory`}>Editar</Link> : null}
                 
              </div>
            </Link>
            <button onClick={() => props.deleteOneMap(mapa._id)} >Eliminar</button>
            </div>
          )
          )}
        <div className='plus-container'>
          <Link to='/newStory'><img src={plus} alt=""/></Link>
        </div>
      </div>
    </>

    
  )
}

export default withAuth(CardStory)
