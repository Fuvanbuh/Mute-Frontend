import React from "react";


const FormStory = props => {
  const {
    title,
    paragraph,
    theme,
    defaul,
    question,
    answer1,
    answer2,
    answer3,
    correct,
  } = props;
  console.log(props + 'este es el bueno')


  const submitForm = e => {
    e.preventDefault();
    handleSubmit(e);
  };
  const changeInput = e => {
    e.preventDefault();
    handleOnChange(e);
  };


  return (
    <form onSubmit={submitForm}>
      <label>Title</label>
      <input name="title" id="title" defaultValue={title} onChange={changeInput}></input>
      <label>Paragraph 1</label>
      <input
        type="text"
        id="pargraph"
        name="paragraph"
        placeholder="Paragraph 1"
        value={paragraph}
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
      <label>Respuesta 1</label>
      <input
        type="text"
        id="answer1"
        name="answer1"
        placeholder="answer1"
        value={answer1}
        onChange={changeInput}
        required
      />
      <select onChange={changeInput}>
        <option name="correct" value={correct} onChange={changeInput}>Esta es la respuesta correcta?</option>
      </select>
      <label>Respuesta 2</label>
      <input
        type="text"
        id="answer2"
        name="answer2"
        placeholder="answer2"
        value={answer2}
        onChange={changeInput}
        required
      />
      <select onChange={changeInput}>
        <option name="correct" value={correct} onChange={changeInput}>Esta es la respuesta correcta?</option>
      </select>
      <label>Respuesta 3</label>
      <input
        type="text"
        id="answer3"
        name="answer3"
        placeholder="answer3"
        value={answer3}
        onChange={changeInput}
        required
      />
      <select onChange={changeInput}>
        <option name="correct" value={correct} onChange={changeInput}>Esta es la respuesta correcta?</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};
export default FormStory;