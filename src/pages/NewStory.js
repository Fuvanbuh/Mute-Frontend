import React, { Component } from 'react'
import storyService from '../services/story-service'
import authService from '../services/auth-service'

import FormStory from '../components/FormStory'

class NewStory extends Component {
  state={
    title:"",
    text:"",
    question:"",
    answer1:"",
    answer2:"",
    answer3:"",
    correct:"",
    creator:"",
    background:"",
  }

  handleOnChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const {
      title,
      text,
      question,
      answer1,
      answer2,
      answer3,
      correct,
      creator,
      background,
    } = this.state;


    const newStory={
      title,
      text,
      question,
      answer1,
      answer2,
      answer3,
      correct,
      background,
    }
   /*  const storyCreator={
      creator
    }

    const creatorOfStory = authService.me(storyCreator);
    this.setState({
      creator:creatorOfStory
    }) */

    storyService
    .createStory(newStory)
    .then(response=>{
       this.props.history.goBack();
    })
    .catch(error => console.log(error));
  };

  render() {
    const {
      title,
      text,
      question,
      answer1,
      answer2,
      answer3,
      correct,
      creator,
      background,
    }= this.state

    return (
      <div>
        <h1>New Story</h1>
        <FormStory
        handleOnChange={this.handleOnChange}
        handleSubmit={this.handleSubmit}
        title={title}
        text={text}
        question={question}
        answer1={answer1}
        answer2={answer2}
        answer3={answer3}
        correct={correct}
        creator={creator}
        background={background}

          
        />

      </div>
    )
  }
}


export default NewStory