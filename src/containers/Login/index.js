import React from 'react';
import './style.css';
import { Input, Button, Icon, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return(
      <div className="login-contianer">
        <div className="left-container">
          <p className="login-topic">LOGIN</p>
          <div className="social-media-login">
            <div className="login-box"><Icon className="social-icon" disabled name='facebook' size='big' /></div>
            <div className="login-box"><Icon className="social-icon" disabled name='twitter square' size='big'/></div>
            <div className="login-box"><Icon className="social-icon" disabled name='google plus square' size='big'/></div>
          </div>
          <div className="divider-login"><Divider horizontal>Or</Divider></div>
          <div className="login-input-container">
            <Input icon='mail' iconPosition='left' placeholder='Email...' className="login-inputs"/>
            <Input type="password" icon='key' iconPosition='left' placeholder='Password...' className="login-inputs"/>
            <Button primary className="login-btn">LOGIN</Button>
            <p className="mobile-create-account">Need a account? <Link to="/register"><span className="login-deco">Click here</span></Link></p>
          </div>
        </div>
        <div className="right-container">
          <p className="new-account-topic">Neen an account?</p>
          <p className="new-account-text">To start using Gold Scorer you will need to sign up an account. Click on the button to sign up your free account!</p>
          <Link to="/register"><Button inverted className="create-account-btn">Create a account</Button></Link>
        </div>
      </div>
    );
  }
}

export default Login;
