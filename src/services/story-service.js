import axios from 'axios';

class StoryService {
  constructor() {
    this.story = axios.create({
      baseURL: 'http://localhost:4000',
      withCredentials: true,
    })

  }
  createStory(newStory) {
    return this.story.post('/story/addStory', newStory)
      .then(response => response.data)
  };

  editStory(id, updatedStory) {
    return this.story.put(`/story/${id}/edit`, updatedStory)
      .then(response => response.data)

  }
}

const storyService = new StoryService();

export default storyService;