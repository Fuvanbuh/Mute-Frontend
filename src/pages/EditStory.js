import React, {Component} from 'react'
import storyService from '../services/story-service'
import { Link } from 'react-router-dom';
import goBack from '../images/goBack.png'
import FormStory from '../components/FormStory'

class EditStory extends Component {
  state = {
    idStory: "",
    paragraph: 0,
    title: "",
    text: "",
    question: "",
    answer1: "",
    answer2: "",
    answer3: "",
    correct: "",
    storyParagraphs: null,
  }

  loadParagraph(parIndex) {
    this.setState({
      paragraph:parIndex,
      text: this.state.storyParagraphs[parIndex].text,
      question: this.state.storyParagraphs[parIndex].question,
      answer1: this.state.storyParagraphs[parIndex].answer1,
      answer2: this.state.storyParagraphs[parIndex].answer2,
      answer3: this.state.storyParagraphs[parIndex].answer3,
      correct: this.state.storyParagraphs[parIndex].correct,
    })

  }

  changeParagraph=(event)=>{
    const parIndex = event.target.value
    this.loadParagraph(parIndex);
  
  }

  componentDidMount() {
    const {
      idStory
    } = this.props.match.params
    storyService
      .getOneStory(idStory)

      .then(response => {
        this.setState({
          storyParagraphs: response.data.paragraph,
          idStory: idStory,
          title: response.data.title,
          text: response.data.paragraph[0].text,
          question: response.data.paragraph[0].question,
          answer1: response.data.paragraph[0].answer1,
          answer2: response.data.paragraph[0].answer2,
          answer3: response.data.paragraph[0].answer3,
          correct: response.data.paragraph[0].correct,
        })
        
      })
      .catch(error => console.log(error));

  }
  handleOnChange = event => {
    event.preventDefault();
    const {
      name,
      value
    } = event.target;
    this.setState({
      [name]: value
    });
  };

  goBacktoHome = () =>{
    this.props.history.goBack()
  }


  handleSubmit = event => {
    event.preventDefault();
    const {
      paragraph,
      text,
      question,
      answer1,
      answer2,
      answer3,
      correct,
      idStory
    } = this.state

    const updatedParagraph = {
      text,
      question,
      answer1,
      answer2,
      answer3,
      correct,
    };
   
    storyService
      .editParagraph(idStory, updatedParagraph, paragraph)
      // .then(response => {
      //   this.props.history.goBack();
      // })
      .catch(error => console.log(error));     
  };

  render() {
    
    const {
      text,
      question,
      answer1,
      answer2,
      answer3,
      paragraph
    } = this.state


    return ( 
    
    <div className="container-newstory">
      <Link className='goback-icon come-back' to={'/homePage'}><img src={goBack} width='50px' alt='go back' /></Link>


      <label className="edit-label" >¿Qué párrafo quieres editar?</label>
      <form className="edit-select"id="changeParagraph">
        <input type="radio" name="paragraph" onChange={this.changeParagraph} value="0" defaultChecked /> 1
        <input type="radio" name="paragraph" onChange={this.changeParagraph} value="1" /> 2
        <input type="radio" name="paragraph" onChange={this.changeParagraph} value="2" /> 3
        <input type="radio" name="paragraph" onChange={this.changeParagraph} value="3" /> 4
        <input type="radio" name="paragraph" onChange={this.changeParagraph} value="4" /> 5
      </form>        
      <h1 className="center-text">Edita tu historia</h1>
      <h2 className="center-text" >Parrafo {(paragraph*1+1)}</h2>
                
      <FormStory
        goBacktoHome={this.goBacktoHome}
        handleOnChange={this.handleOnChange}
        handleSubmit={this.handleSubmit}
        text={text}
        question={question}
        answer1={answer1}
        answer2={answer2}
        answer3={answer3}
      />                
    </div>
    )
  }
}

export default EditStory;