import React, { Component } from 'react'
import storyService from '../services/story-service'

import FormStory from '../components/FormStory'

class EditStory extends Component {
  state = {

    idStory:"",
    paragraph: 1,
    text: "",
    
  }
  componentDidMount(){
    const{idStory} = this.props.match.params
    storyService
    .getOneStory(idStory)
   
     .then(response=>{
       this.setState({ 
        idStory: idStory,
       title:response.data.title,
       paragraph:response.data.paragraph,

      }) 
      console.log(this.state)
     })
     .catch(error => console.log(error));
     
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
    const { title, paragraph, idStory } = this.state;
    const updatedStory = {
      title,
      paragraph,
    };

    storyService
      .updtateOneChallenge(idStory, updatedStory)
      .then(response => {
        this.props.history.goBack();
      })
      .catch(error => console.log(error));
  };

  render() {
    const{title,paragraph,idStory} = this.state
    return (
      <div>
        <h1>EDIT STORY PAGE</h1>
        <h2>{title}</h2>
        { paragraph &&
         <FormStory
         
        
        />}
        
      </div>
    )
  }
}

export default EditStory;