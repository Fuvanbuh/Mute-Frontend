import React from 'react'
import { Link } from 'react-router-dom';



export const CardStory = (props) => {
  console.log(props)
  const { maps } = props
  console.log(maps)
  return (
    <>
      <div>
        {maps &&
          maps.map((mapa, index) => (
            <div key={index}>
              <h1>{mapa.story.title}</h1>
              <Link to='/EditStory'>edit</Link>
              <Link to='/'>delete</Link>
            </div>)
          )
        }



      </div>
    </>
  )
}
