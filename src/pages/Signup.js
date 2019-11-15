
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
      <div>

        <form onSubmit={this.handleFormSubmit}>
          <input id="username" type="text" name="username" value={username} placeholder="Username" required onChange={this.handleChange} />
          <input id="email" type="email" name="mail" value={mail} placeholder="Email" required onChange={this.handleChange} />
          <input id="password" type="password" name="password" value={password} placeholder="Password" required onChange={this.handleChange} />
          {errors && (
            <div class="errors">
              <p>{errors}</p>
            </div>
          )}
          {!password || !username || !mail ? <p className="advice">All fields are required</p> : null}
          <button type="submit" disabled={!password || !username || !mail}>Sign up</button>
          <p>
            Already have account?
            <Link to={'/login'}> Login</Link>
          </p>

        </form>

      </div>
    )
  }
}

export default withAuth(Signup);