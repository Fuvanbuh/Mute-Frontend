import React, { Component } from 'react';
import storyService from '../services/story-service';
import  FormStory  from '../components/FormStory'


class NewStory extends Component {
  state = {
    title: "",
    paragraph: [],
    theme: "",
    default: "",
    question: '',
    answer1: '',
    answer2: '',
    answer3: '',
    correct: ''

    
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
      paragraph,
      questions,
      question,
      answer1,
      answer2,
      answer3,
      correct,
      defaul,
      theme,
    } = this.state;
   console.log(this.state)
  }

  render() {
    return (

      <FormStory
        title={title}
        paragraph={paragraph}
        answer1={answer1}
        answer2={answer2}
        answer3={answer3}
        theme={theme}
        correct={correct}
        defaul={defaul}

        handleOnChange={this.handleOnChange}
        handleSubmit={this.handleSubmit}
      />

    )
  }
}


export default NewStory