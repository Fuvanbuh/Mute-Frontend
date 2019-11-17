import React, { Component } from 'react'
import mapService from '../services/map-service'
import { Link } from 'react-router-dom';


class TravelMap extends Component {
  state = {
    map: null,
  }


  componentDidMount = async () => {
    const { idMap } = this.props.match.params

    const oneMap = await mapService.getTheMap(idMap);
    this.setState({
      map: oneMap
    })
    console.log(oneMap)
  }


  render() {

    const { map } = this.state
    return (
      <div>
        <h1>hola</h1>
       
         {map &&
          map.story.theme.checkpoint.map((mapa, index) => (
            <Link to={`/travelMap/${map._id}/path/${map.completePath}`}>
            <img src={require(`../images/${mapa}`)} key={index} alt="planet chekpoint" />
            </Link>

          )
          )} 

      </div>
    )
  }
}
export default TravelMap;