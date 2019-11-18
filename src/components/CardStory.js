import React from 'react'
import { Link } from 'react-router-dom';
import withAuth from './withAuth';


//NO FUNCIONA EL BACKGROUND PORQUE THEME NO ESTA POPULADO

//Link Edit: renderitzara la info d'aquell story concreta

//Delete button: esta rebent per props una funció que s'executa a Home i varia l'estat de la HomePage perque desapareix una historia, aquell User perd un dels seus maps.story

const CardStory = (props) => {
  const { maps } = props


  return (
    <>
      <div>
        {maps &&
          maps.map((mapa, index) => (
            <div key={index} style={{ backgroundImage: `url(${mapa.story.theme.backgorund})` }}>
              <h1>{mapa.story.title}</h1>

              {mapa.story.creator === props.user._id ? <Link to='/EditStory'>edit</Link>: null}
              <button onClick={() => props.deleteOneMap(mapa._id)} >Delete</button>
            </div>)
          )}
        <div>
          <Link to='/newStory'>+</Link>
        </div>
      </div>
    </>
  )
}

export default withAuth(CardStory)
