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
  addParagraph(id, updatedStory) {
    return this.story.put(`/story/${id}/addParagraph`, updatedStory)
      .then(response => response.data)
  }
  editParagraph(id, updatedParagraph, paragraphNumber) {
    //mirar qué párrafo tenemos que modificar
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