
import React, { Component } from 'react'
import withAuth from '../components/withAuth';

//import { CardStory } from '../components/CardStory'
//import mapService from '../services/map-service'

class Home extends Component {
  // state = {
  //   maps: ""
  // }
  // componentDidMount() {
  //   mapService
  //     .getAllMaps()
  //     .then(response => {
  //       this.setState({
  //         maps: response.data
  //       })
  //     })
  //     .catch(error => console.log(error))
  // }
  render() {
    //const { maps } = this.state
    return (
      {/* <div>
        <CardStory maps={maps}/>

      </div> */}
    )
  }
}
export default withAuth(Home);