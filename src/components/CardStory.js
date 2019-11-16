import React from 'react'
import { Link } from 'react-router-dom';


//NO FUNCIONA EL BACKGROUND PORQUE THEME NO ESTA POPULADO

//Link Edit: renderitzara la info d'aquell story concreta

//Delete button: esta rebent per props una funció que s'executa a Home i varia l'estat de la HomePage perque desapareix una historia, aquell User perd un dels seus maps.story

export const CardStory = (props) => {
  const { maps } = props
  console.log(maps)
  return (
    <>
      <div>
        {maps &&
          maps.map((mapa, index) => (
            <div key={index} style={{ backgroundImage: `url(./images/${mapa.story.theme.background})` }}>
              <h1>{mapa.story.title}</h1>
              <Link to='/EditStory'>edit</Link>
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
