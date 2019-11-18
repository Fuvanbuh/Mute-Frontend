import React from 'react'

const FormStory = (props) => {

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
    handleOnChange,
    handleSubmit
  } = props;

  const submitForm = e => {
    e.preventDefault();
    handleSubmit(e);
  };

  const changeInput = e => {
    e.preventDefault();
    handleOnChange(e);
  };

  return (
    <div>
      <h1>Esto es form story</h1>
      <form onSubmit={submitForm}>
        <h2>Hola {creator}</h2>
        <label>Escoje un fondo </label>
        {/* No se com fer-ho */}
        <label> Titulo de la historia</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Titulo"
          value={title}
          onChange={changeInput}
          required
        />
        <label>Parrafo 1</label>
        <input
          type="text"
          id="text"
          name="text"
          placeholder="Parrafo 1"
          value={text}
          onChange={changeInput}
          required
        />

        <label>Pregunta</label>
        <input
          type="text"
          id="question"
          name="question"
          placeholder="Pregunta"
          value={question}
          onChange={changeInput}
          required
        />
        <label>Respuesta1</label>
        <input
          type="text"
          id="ansewer1"
          name="answer1"
          placeholder="Respuesta 1"
          value={answer1}
          onChange={changeInput}
          required
        />
        <label>Respuesta2</label>
        <input
          type="text"
          id="ansewer2"
          name="answer2"
          placeholder="Respuesta 2"
          value={answer2}
          onChange={changeInput}
          required
        />
        <label>Respuesta3</label>
        <input
          type="text"
          id="ansewer3"
          name="answer3"
          placeholder="Respuesta 3"
          value={answer3}
          onChange={changeInput}
          required
        />
        <label>Cual es la respuesta correcta?</label>
        <select>
          <option value={correct} onChange={changeInput}>{answer1}</option>
          <option value={correct} onChange={changeInput}>{answer2}</option>
          <option value={correct} onChange={changeInput}>{answer3}</option>

        </select>

        <button>Save</button>
      </form>
    </div>
  )
}

export default FormStory