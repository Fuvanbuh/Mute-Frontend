import axios from 'axios';
class StoryService {
  constructor() {
    this.story = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
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
  addParagraph(id, updatedStory) {
    return this.story.put(`/story/${id}/addParagraph`, updatedStory)
      .then(response => response.data)
  }
  editParagraph(id, updatedParagraph, paragraphNumber) {
    const data = {
      updatedParagraph,
      paragraphNumber
    }
    return this.story.put(`/story/${id}/edit`, data)
      .then(response => response.data)
  }
  getOneStory(id) {
    return this.story.get(`/story/${id}`).then(response => response);
  }


}
const storyService = new StoryService();
export default storyService;