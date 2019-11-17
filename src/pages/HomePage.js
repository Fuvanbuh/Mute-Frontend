import React, { Component } from 'react'
import mapService from '../services/map-service'
import CardStory from '../components/CardStory'
import withAuth from '../components/withAuth'

class HomePage extends Component {

  state = {
    maps: null,
  }

  componentDidMount = async () => {
    const newMaps = await mapService.getAllMaps();
    this.setState({
      maps: newMaps
    })
  }

  deleteOneMap = async (mapId) => {
    const { maps } = this.state
  /*   const response =  */await mapService.deleteMap(mapId);
    const newArray = maps.filter((item => item._id !== mapId));
    
    this.setState({
      maps: newArray
    })
  }



  render() {
    console.log('maps', this.state.maps)
    const { maps } = this.state
    return (
      <div>
        <button onClick={this.props.logout}>Logout</button>

        <CardStory maps={maps} deleteOneMap={this.deleteOneMap} />
      </div>
    )
  }
}

export default withAuth(HomePage)