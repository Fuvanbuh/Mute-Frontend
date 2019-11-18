import React from 'react'
import { Link } from 'react-router-dom';
import withAuth from './withAuth';

//Link Edit: renderitzara la info d'aquell story concreta

const CardStory = (props) => {
  const { maps } = props
  console.log(maps)
  return (
    <>
      <div>
        {maps &&
          maps.map((mapa, index) => (
            <div>
            <Link to={`/travelMap/${mapa._id}`} maps={maps}>
            
               <div key={index} className='card-story' style={{ backgroundImage: `url(./images/${mapa.story.theme.background})` }}> 
                <h1>{mapa.story.title}</h1>
                {mapa.story.creator === props.user._id ? <Link to='/EditStory'>edit</Link> : null}
              </div>
            </Link>
            <button onClick={() => props.deleteOneMap(mapa._id)} >Delete</button>
            </div>
          )
          )}
        <div>
          <Link to='/newStory'>+</Link>
        </div>
      </div>
    </>

    
  )
}

export default withAuth(CardStory)
