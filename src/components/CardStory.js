import React from 'react'


export const CardStory = (props) => {
  const { maps } = props
  console.log(maps)
  return (
    <>
      <h2>Hola</h2>
      <div>
        {maps &&
          maps.map((mapa, index) => (
            <div key={index}>
              <h1>{mapa.story.title}</h1>
            </div>)
          )
        }



      </div>
    </>
  )
}
