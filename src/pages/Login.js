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

      <div>

        <form onSubmit={this.handleFormSubmit}>
          <input
            id="email"
            type="email"
            name="mail"
            value={mail}
            placeholder="Email"
            required
            onChange={this.handleChange}
          />
          <input
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
          <button type="submit" disabled={!mail || !password} >Inicia Sesión</button>
          <p>
            ¿Todavía no tienes cuenta?
              <Link to={'/signup'}> Resgístrate</Link>
          </p>
        </form>
      </div>
    );
  }
}
export default withAuth(Login);