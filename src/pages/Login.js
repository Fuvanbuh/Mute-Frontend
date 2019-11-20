import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import withAuth from '../components/withAuth';

class Login extends Component {
  state = {
    mail: '',
    password: '',
    errors: ''
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { mail, password } = this.state;

    this.props
      .login({ mail, password })
      .then(user => {
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
    const { mail, password, errors } = this.state;
    return (

      <div className='container-login'>

        <form className='container-form' onSubmit={this.handleFormSubmit}>
          <input className='inputs'
            id="email"
            type="email"
            name="mail"
            value={mail}
            placeholder="Email"
            required
            onChange={this.handleChange}
          />
          <input className='inputs'
            id="password"
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            required
            onChange={this.handleChange}
          />
          {errors && (
            <div class="errors">
              <p>{errors}</p>
            </div>
          )}
          <button className='btn-none btn-general' type="submit" disabled={!mail || !password} >Inicia Sesión</button>
          <p>
            ¿Todavía no tienes cuenta?
              <Link className='link' to={'/signup'}> Resgístrate</Link>
          </p>
        </form>
      </div>
    );
  }
}
export default withAuth(Login);