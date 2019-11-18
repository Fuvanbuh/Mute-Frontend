import axios from 'axios';

class MapService {
  constructor() {
    this.map = axios.create({
      baseURL: 'http://localhost:4000',
      withCredentials: true,
    })

  }

  getAllMaps() {
    return this.map.get('/map')
      .then(response => response.data)
  };

  deleteMap (id) {
    return this.map.delete(`/map/${id}/delete`)
      .then(response => response.data)
  }

  getTheMap (id) {
    return this.map.get(`/map/${id}`)
    .then(response => response.data)
  }

  modifyPathMap(id){
    return this.map.put(`/map/${id}/edit`)
    .then (response => response.data)
  }
  createMap(newMap) {
    return this.map.post('/map/addMap', newMap)
      .then(response => response.data)
  };


}

const mapService = new MapService();

export default mapService;