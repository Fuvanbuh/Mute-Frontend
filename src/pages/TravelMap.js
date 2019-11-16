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
        {map &&
          map.story.theme.checkpoint.map((mapa, index) => (
            <Link key={index} to={{ pathname: `/travelMap/${map._id}/path/${index}`, state: { map } }}>
              <img src={require(`../images/${mapa}`)} alt="planet chekpoint" />
            </Link>

          )
          )}
      </div>
    )
  }
}
export default TravelMap;