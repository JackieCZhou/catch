import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';
import LoginForm from '../../components/LoginForm/LoginForm';

class Login extends Component {
  static contextType = AuthContext;

  state = {
    redirectToReferrer: false,
    error: ""
  }

  handleSubmit = (email, password) => {
    API.Users.login(email, password)
      .then(response => response.data)
      .then(({ user, token }) => {
        this.context.onLogin(user, token);
        this.setState({ redirectToReferrer: true, error: "" });
      })
      .catch(err => {
        let message;

        switch (err.response.status) {
          case 401:
            message = 'Sorry, that email/password combination is not valid. Please try again.';
            break;
          case 500:
            message = 'Server error. Please try again later.';
            break;
          default:
            message = 'Unknown error.';
        }

        this.setState({ error: message });
      });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/ClientHome" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div className='Login' style ={{textAlign: 'center'}}>
        <div className='row'>
          <div className='col-sm'>
          </div>
        </div>
        <div className='row' >
          <div className='col-sm'>
            <LoginForm onSubmit={this.handleSubmit} />
          </div>
        </div>
        <br />
        {this.state.error &&
          <div className='row'>
          <div className='col-sm-3'></div>
            <div className='col-sm-6'>
              <div className='alert alert-danger mb-3' role='alert'>
                {this.state.error}
              </div>
            </div>
            <div className='col-sm-3'></div>
          </div>}
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
      </div>
    );
  }
}

export default Login;
