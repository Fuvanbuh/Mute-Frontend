import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import storyService from '../services/story-service'
import { Link } from 'react-router-dom';
import goBack from '../images/goBack.png'

import FormStory from '../components/FormStory'
import mapService from '../services/map-service';

class NewStory extends Component {
 
  state = {
    completePath: 1,
    userId: "",
    idStory: '',
    title: "",
    paragraph: 1,
    text: "",
    question: "",
    answer1: "",
    answer2: "",
    answer3: "",
    correct: "",
    theme: '',
    themes: null,
    
  }
  

  componentDidMount = async () => {
    const getThemes = await storyService.getThemes();
    
    this.setState({
      themes: getThemes,
    })
  }

 async createStory() {
    const {
      title,
      theme,
      idStory,
      completePath,
      userId,
    } = this.state;

    const newStory = {
      title,
      paragraph: [],
      theme,
      idStory,
    }

    const story = await storyService.createStory(newStory)
    
    this.setState({
      idStory: story._id
    })

   const newMap = {
     completePath,
     story: story._id,
     userId,
   }

   await mapService.createMap(newMap)

    this.addParagraph()
  }

 async addParagraph() {
    const {
      text,
      question,
      answer1,
      answer2,
      answer3,
      correct,
      idStory
    } = this.state

    const updatedPar = {
      text,
      question,
      answer1,
      answer2,
      answer3,
      correct,
    }
    await storyService.addParagraph(idStory, { $push: { paragraph: updatedPar } })

    await this.setState({
      paragraph: this.state.paragraph + 1,
      text: "",
      question: "",
      answer1: "",
      answer2: "",
      answer3: "",
      correct: "",
    })

  }

  handleOnChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  handleSubmit = async (event) => {
    event.preventDefault();
    if (this.state.paragraph === 1) {
      this.createStory()
    }
    else {
      this.addParagraph()
    }
  };
  goBacktoHome = () =>{
    this.props.history.goBack()
  }

  render() {
    const {
      title,
      text,
      question,
      answer1,
      answer2,
      answer3,
      correct,
      theme,
      themes,
      paragraph,
    } = this.state

  
    return (
      <div className="container-newstory">
       <Link className='goback-icon come-back' to={'/homePage'}><img src={goBack} width='50px' alt='go back' /></Link>

        
        { paragraph < 6 ? <FormStory
          goBacktoHome={this.goBacktoHome}
          handleOnChange={this.handleOnChange}
          handleSubmit={this.handleSubmit}
          title={title}
          text={text}
          question={question}
          answer1={answer1}
          answer2={answer2}
          answer3={answer3}
          correct={correct}
          theme={theme}
          themes={themes}
          paragraph={paragraph}
        />: null}
      </div>
    )
  }
}

export default withRouter(NewStory);
