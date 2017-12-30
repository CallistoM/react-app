import React, { Component } from 'react';
import Header from './Header';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  handleClick = () => {};

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div id="LoginContainer" className="inner-container">
        <Header />
        <form onSubmit={this.handleSubmit}>
          <p>Sign in or sign up by entering your email and password.</p>
          <input
            type="text"
            onChange={this.handleEmailChange}
            value={this.state.email}
            placeholder="Your email"
          />
          <input
            type="password"
            onChange={this.handlePasswordChange}
            value={this.state.password}
            placeholder="Your password"
          />
          <button className="red light" type="submit">
            Login
          </button>
          <p className="password">Forgot password?</p>
        </form>
      </div>
    );
  }
}

export default LoginContainer;
