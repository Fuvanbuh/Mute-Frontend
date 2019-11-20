import React, { Component } from 'react'
import mapService from '../services/map-service'
import { Link } from 'react-router-dom';
import cofre from '../images/wireframes-09.png'



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
  }
  
  render() {
    
    const { map } = this.state
    const copy = {...map}
    
    
    return (
      <>
      {map ? (
        <div className="container-travel-map"  style={{ backgroundImage: `url(./../images/${map.story.theme.background})` }}> 
          {map.story.theme.checkpoint.map((mapa, index) =>{
          
            if(index < copy.completePath ){
              return (
                <Link key={index} to={{ pathname: `/travelMap/${map._id}/path/${index}`, state: { map } }}>
                <img  src={require(`../images/${mapa}`)} alt="planet chekpoint" />
                </Link>
              )
            }else{
              return(
                <img className='cofre' key={index} src={require(`../images/${mapa}`)} alt="planet chekpoint" />
              )
            }
          } 
          )}

          {copy.completePath < 6?
          <img className='cofre' src={cofre} alt="cofre"/>
          : <Link  to='/win'>
          <img  src={cofre} alt="cofre"/>
          </Link>}

          <Link to={'/homePage'}>Salir</Link>
        </div>) 
      : null}
      </>
    )
  }
}
export default TravelMap;