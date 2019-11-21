
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from '../components/withAuth';

class Signup extends Component {
  state = {
    username: '',
    mail: '',
    password: '',
    errors: ''
  };


  handleFormSubmit = event => {
    event.preventDefault();
    const mail = this.state.mail;
    const password = this.state.password;
    const username = this.state.username;

    this.props
      .signup({ mail, password, username })
      .then(user => {
        this.setState({
          username: '',
          mail: '',
          password: '',
          errors: ''
        });
      })
      .catch(({ response }) => {
        this.setState({ errors: response.data.message });
      });
  };


  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };


  render() {
    const { mail, password, username, errors } = this.state;
    return (
      <div className='container-signup'>
        <form className='container-form margin-bottom' onSubmit={this.handleFormSubmit}>
          <input className='inputs-auth' id="username" type="text" name="username" value={username} placeholder="Username" required onChange={this.handleChange} />
          <input className='inputs-auth' id="email" type="email" name="mail" value={mail} placeholder="Email" required onChange={this.handleChange} />
          <input className='inputs-auth' id="password" type="password" name="password" value={password} placeholder="Password" required onChange={this.handleChange} />
          {errors && (
            <div class="errors">
              <p>{errors}</p>
            </div>
          )}
          {!password || !username || !mail ? <p className="advice">Es necesario rellenar todos los campos</p> : null}
          <button className='btn-none btn-general ' type="submit" disabled={!password || !username || !mail}>Registrarse</button>
          <p>
            ¿Ya tienes una cuenta?
            <Link className='link' to={'/login'}> Inicia Sesión</Link>
          </p>

        </form>

      </div>
    )
  }
}

export default withAuth(Signup);