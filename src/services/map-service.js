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
}

const mapService = new MapService();

export default mapService;