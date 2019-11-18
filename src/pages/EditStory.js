import React, { Component } from 'react'
import storyService from '../services/story-service'

import FormStory from '../components/FormStory'

class EditStory extends Component {
  state = {

    idStory:"",
    paragraph: "",

    
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
      paragraph/* No se com fer-ho perque no detecta el change dels inputs pq no ho puc fer i l'input no es deixa editar[{
      text,
      question,

    }] */

    };

    storyService
      .editStory(idStory, updatedStory)
      .then(response => {
        this.props.history.goBack();
      })
      .catch(error => console.log(error));
  };

  render() {
    const{title,paragraph} = this.state
    return (
      <div>
        <h1>EDIT STORY PAGE</h1>
        <h2>{title}</h2>
        { paragraph &&
         paragraph.map((parr,index)=>(
         <div key={index}> 
         <FormStory
         handleOnChange={this.handleOnChange}
         handleSubmit={this.handleSubmit}
         text={parr.text}
          question={parr.question}
          answer1={parr.answer1}
          answer2={parr.answer2}
          answer3={parr.answer3}
          />
          </div>
          ))


        
        }
        
      </div>
    )
  }
}

export default EditStory;