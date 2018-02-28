import React, { Component } from 'react';
import { connect } from 'react-redux';
import { googleLogin, twitterLogin } from '../actions/userAction';
import FormInputField from '../components/FormInputField';
import FormButtons from '../components/FormButtons';
import FormSetup from '../components/FormSetup'; 
import {login, getUser} from '../actions/userAction'; 
import ErrorAlert from '../components/ErrorAlert';
//import '../styles/loading.css';

class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        error: ''
      };
    }
  
    componentWillMount() {
      if (this.props.user !== null) {
        this.props.history.push('/');
      }
    }
    
    componentWillReceiveProps(nextProps) {
      if (nextProps.user !== null) {
        nextProps.history.push('/');
      }
    }
  
  
    submitLogin(event) {
      event.preventDefault();
      this.props.login(this.state.email, this.state.password).catch(err => {
        this.setState({
          error: err
        });
      });
    }

    renderBody() {
        const errStyle = {
          borderColor: 'red'
        };

        return (
            <form onSubmit={event => { this.submitLogin(event);}}>
            <div className="container-fluid">
                <div>
                    <FormInputField id="email" type="text" label="Email"
                    inputAction={(event) => this.setState({ email: event.target.value })} 
                    style={this.state.error ? errStyle : null}
                    />

                    <FormInputField id="password" type="password" label="Password"
                    inputAction={(event) => this.setState({ password: event.target.value })}
                    style={this.state.error ? errStyle : null}
                     /> 

                    {this.state.error && <ErrorAlert>Your username/password is incorrect</ErrorAlert>}
                    <FormButtons submitLabel="Sign in baby" otherLabel="Create Account Now bitch"
                            goToLink="/CreateAccount" {...this.props}/>        
              </div>
              <div className="row mt-3">
                <div className="col-sm-12 btn-toolbar">
                        <button className="btn btn-danger col-sm-6" onClick={this.props.googleLogin}>
                        <span className="fa fa-google pull-left"/>
                        Login with Google
                        </button>
                        <button className="btn btn-success col-sm-6" onClick={this.props.twitterLogin}>
                        <span className="fa fa-twitter pull-left"/>
                        Login with Twitter
                        </button>
                </div>
                </div>
            </div>
            </form>
        );
    }
    render() {
        return (
            <div>
                <FormSetup title="Sign In" body={this.renderBody()} />
            </div>
            
        )
    }
}

function mapStateToProps(state, onwProps) { //container section. I have put components and containers together 
    return {
        user: state.user
    };
}

export default connect(mapStateToProps, { login, getUser, googleLogin, twitterLogin })(Login);