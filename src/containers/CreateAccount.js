import React, {Component} from 'react';
import FormInputField from '../components/FormInputField';
import FormButtons from '../components/FormButtons';
import FormSetup from '../components/FormSetup'; 
import {createAccount} from '../actions/userAction';
import { connect } from 'react-redux';
import ErrorAlert from '../components/ErrorAlert';

class CreateAccount extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        confirmPassword: '',
        error: ''
      };
    }
  
    isValid() {
      const { email, password, confirmPassword } = this.state;
  
      if (email === '' || password === '' || confirmPassword === '') {
        this.setState({
          error: 'Please enter in all fields'
        });
        return false;
      }
  
      if (password !== confirmPassword) {
        this.setState({
          error: 'Please make sure your passwords match'
        });
        return false;
      }
  
      return true;
    }
  
    submitAccount(event) {
      event.preventDefault();
      if (!this.isValid()) {
        return;
      }
      this.props.createAccount(this.state.email, this.state.password).then(() => {
        this.props.history.replace('/');
      }).catch(err => {
        this.setState({
          error: err.message
        });
      });
    }
  
    renderBody() {
      const errStyle = {
        borderColor: 'red'
      };
      return (
        <div>
          <form onSubmit={(event) => this.submitAccount(event)}>
            <FormInputField id="email" type="text" label="Email"
                        inputAction={(event) => this.setState({ email: event.target.value })}
                        style={this.state.error ? errStyle : null }/>
            <FormInputField id="password" type="password" label="Password"
                        inputAction={(event) => this.setState({ password: event.target.value })}
                        style={this.state.error ? errStyle : null }/>
            <FormInputField id="confirm-password" type="password" label="Confirm Password"
                        inputAction={(event) => this.setState({ confirmPassword: event.target.value })}
                        style={this.state.error ? errStyle : null }/>
            {this.state.error && <ErrorAlert>
              {this.state.error}
            </ErrorAlert>}
            <FormButtons submitLabel="Create Account" otherLabel="Go back" goToLink="/Login" {...this.props}/>
          </form>
        </div>
      );
    }
  
    render() {
      return (
        <FormSetup body={this.renderBody()} title="Create Account"/>
      );
    }
  }
  
  export default connect(null, { createAccount })(CreateAccount);