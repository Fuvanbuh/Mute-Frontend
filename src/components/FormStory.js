import React, { Component } from 'react'
import storyService from '../services/story-service'

export default class FormStory extends Component {

  submitForm = e => {
    e.preventDefault();
    this.props.handleSubmit(e);
  };

  changeInput = e => {
    e.preventDefault();
    this.props.handleOnChange(e);
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
      themes,
      paragraph,
    } = this.props;

    
    return (
      <div className="container-form-story">
        {paragraph === 1 ? <h1>New Story</h1> : <h1>{title}</h1> }

        <form className="container-form"onSubmit={this.submitForm}>
          {paragraph === 1 ?
            <div>
              <label>Escoje un fondo </label>



              <select name="theme" onChange={this.changeInput} >
                <option>Selecciona </option>
                {
                  themes && themes.map((theme, index) => (
                    <option value={theme._id} key={index}>{theme.title}</option>
                  ))
                }
              </select>
              <label> Titulo de la historia</label>
              <input
                className="input"
                type="text"
                id="title"
                name="title"
                placeholder="Titulo"
                value={title}
                onChange={this.changeInput}
                required
              /> </div> :  null}

          <label>Parrafo {paragraph}</label>

          <input
            type="text"
            id="text"
            name="text"
            placeholder={`Parrafo ${paragraph}`}
            value={text}
            onChange={this.changeInput}
            required
          />

          <label>Pregunta</label>
          <input
            type="text"
            id="question"
            name="question"
            placeholder="Pregunta"
            value={question}
            onChange={this.changeInput}
            required
          />
          <label>Respuesta1</label>
          <input
            type="text"
            id="ansewer1"
            name="answer1"
            placeholder="Respuesta 1"
            value={answer1}
            onChange={this.changeInput}
            required
          />
          <label>Respuesta2</label>
          <input
            type="text"
            id="ansewer2"
            name="answer2"
            placeholder="Respuesta 2"
            value={answer2}
            onChange={this.changeInput}
            required
          />
          <label>Respuesta3</label>
          <input
            type="text"
            id="ansewer3"
            name="answer3"
            placeholder="Respuesta 3"
            value={answer3}
            onChange={this.changeInput}
            required
          />
          <label>Cual es la respuesta correcta?</label>
          <select onChange={this.changeInput}>
            <option value={correct}>{answer1}</option>
            <option value={correct}>{answer2}</option>
            <option value={correct}>{answer3}</option>

          </select>
          {paragraph <= 4 ? <button>Next</button> : <button>Finish</button>}

        </form>
      </div>
    )
  }
}
