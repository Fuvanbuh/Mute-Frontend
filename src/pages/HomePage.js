import React, { Component } from 'react'
import mapService from '../services/map-service'
import { CardStory } from '../components/CardStory'

export default class Test extends Component {

  state = {
    maps: null,
  }
  componentDidMount = async () => {
    const newMaps = await mapService.getAllMaps();
    console.log(newMaps)
    this.setState({
      maps: newMaps
    })
  }

  render() {
    const { maps } = this.state
    return (
      <div>
        <CardStory maps={maps} />
      </div>
    )
  }
}
