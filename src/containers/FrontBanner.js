

import React, { Component } from 'react';

export default class FrontBanner extends Component {
  render() {
    
    return (
        <div>
          <div className="row">
            <div className="col-sm-12 jumbotron" style={{ marginTop: '-20px' }}>
              <h1> DIARY | {new Date().getFullYear()}</h1>
              <h2><i>Login with your favourite <b>Social Network</b> to start writting!</i></h2>
            </div>
          </div>   
        </div>
    );
  }
}

