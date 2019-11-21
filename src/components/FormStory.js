import React, { Component } from 'react'



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
      theme,
      themes,
      paragraph,
    } = this.props;


    return (
      <>
      <div className="container-form-story">

        {paragraph === 1 ? <h1>New Story</h1> : <h1>{title}</h1> }

        <form className="container-form"onSubmit={this.submitForm}>
          {paragraph === 1 ?
            <div className="container-story">
              <label className="label">Escoje un fondo </label>



              <select className="custom-select" name="theme" onChange={this.changeInput} >
                <option>Selecciona </option>
                {
                  themes && themes.map((theme, index) => (
                    <option value={theme._id} key={index}>{theme.title}</option>
                  ))
                }
              </select>
              <label className="label"> Titulo de la historia</label>
              <input
                className="inputs inputs-form"
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={this.changeInput}
                required
              /> </div> :  null}

          <label className="label" >Párrafo {paragraph}</label>

          <textarea className="paragraph-textarea" rows="10"
          
            type="text"
            id="text"
            name="text"
            placeholder={`Este es el párrafo ${paragraph}. Máximo de 250 carácterers`}
            value={text}
            onChange={this.changeInput}
            required
          />

          <label className="label" >Pregunta</label>
          <input
            className="inputs inputs-form"
            type="text"
            id="question"
            name="question"
            value={question}
            onChange={this.changeInput}
            required
          />
          <label className="label" >Respuesta 1</label>
          <input
            className="inputs inputs-form"
            type="text"
            id="ansewer1"
            name="answer1"
            value={answer1}
            onChange={this.changeInput}
            required
          />
          <label className="label" >Respuesta 2</label>
          <input
            className="inputs inputs-form"
            type="text"
            id="ansewer2"
            name="answer2"
            value={answer2}
            onChange={this.changeInput}
            required
          />
          <label className="label" >Respuesta 3</label>
          <input
            className="inputs inputs-form"
            type="text"
            id="ansewer3"
            name="answer3"
            value={answer3}
            onChange={this.changeInput}
            required
          />
          <label className="label">¿Cuál es la respuesta correcta?</label>
          <select name="correct" className="custom-select" onChange={this.changeInput}>
            <option value={answer1}>{answer1}</option>
            <option value={answer2}>{answer2}</option>
            <option value={answer3}>{answer3}</option>

          </select>
          {paragraph <= 4 ? <button disabled={!correct && !theme} className="btn-none btn-welcome">Siguiente</button> : <button className="btn-none btn-welcome" onClick={this.props.goBacktoHome}>Guardar</button>}

        </form>
      </div>
      </>
    )
  }
}
