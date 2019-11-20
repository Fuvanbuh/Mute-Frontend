import React, { Component } from 'react'
import mapService from '../services/map-service'
import CardStory from '../components/CardStory'
import withAuth from '../components/withAuth'
import logout from '../images/log-out-01.png'
import info from '../images/info.png'


class HomePage extends Component {

  state = {
    maps: null,
    showI: false
  }

  componentDidMount = async () => {
    const newMaps = await mapService.getAllMaps();
    this.setState({
      maps: newMaps
    })

  }
  handleShowI = () => {
    this.setState({
      showI: !this.state.showI
    })
  }

  deleteOneMap = async (mapId) => {
    const { maps } = this.state
    await mapService.deleteMap(mapId);
    const newArray = maps.filter((item => item._id !== mapId));

    this.setState({
      maps: newArray
    })

  }



  render() {

    const { maps } = this.state
    const { showI } = this.state

    return (
      <div className='container-general home-page'>
        <div className='btn-home'>
          <button className="btn-none" onClick={this.props.logout}><img className="logout-img" width="30" src={logout} alt="" /></button>
          <button className="btn-none btn-home" onClick={this.handleShowI}><img width="30" src={info} alt="" /></button>
        </div>

        {showI ? <div className='text-info'> <span > Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore nostrum minima, qui nihil pariatur optio unde iusto impedit quod, sint nobis consequuntur iure. Quae rem modi, quia nihil quo praesentium!z</span> </div> : null}
        <CardStory maps={maps} deleteOneMap={this.deleteOneMap} />
      </div>
    )
  }
}

export default withAuth(HomePage)