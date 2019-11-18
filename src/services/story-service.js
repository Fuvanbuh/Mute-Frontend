import axios from 'axios';
class StoryService {
  constructor() {
    this.story = axios.create({
      baseURL: 'http://localhost:4000',
      withCredentials: true,
    })
  }

  getThemes() {
    return this.story.get('/story/themes')
      .then(response => response.data)
  };

  createStory(newStory) {
    return this.story.post('/story/addStory', newStory)
      .then(response => response.data)
  };
  editStory(id, updatedStory) {
    return this.story.put(`/story/${id}/edit`, updatedStory)
      .then(response => response.data)
  }
  getOneStory(id) {
    return this.story.get(`/story/${id}`).then(response => response);
  }


}
const storyService = new StoryService();
export default storyService;