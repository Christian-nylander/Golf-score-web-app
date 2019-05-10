import React from 'react';
import './style.css';
import { Input, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return(
      <div className="login-contianer">
        <div className="right-container">
          <p className="new-account-topic2">Already have an account?</p>
          <p className="new-account-text">Click here to start exploring the world of Golf Scorer!</p>
          <Link to="/login"><Button inverted className="to-login-account-btn">To login</Button></Link>
        </div>
        <div className="left-container">
          <p className="login-topic">Register account!</p>
          <div className="login-input-container">
            <Input icon='user' iconPosition='left' placeholder='Username...' className="login-inputs"/>
            <Input icon='mail' iconPosition='left' placeholder='Email...' className="login-inputs"/>
            <Input type="password" icon='key' iconPosition='left' placeholder='Password...' className="login-inputs"/>
            <Input type="password" icon='key' iconPosition='left' placeholder='Password...' className="login-inputs"/>
            <Button primary className="login-btn">Create account</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
