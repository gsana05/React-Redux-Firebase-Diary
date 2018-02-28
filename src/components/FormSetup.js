import React, { Component } from 'react';
import FrontBanner from '../containers/FrontBanner';

export default class FormSetup extends Component {
  render() {
    const { title, body, footer } = this.props;
    return (
    <div>
     <FrontBanner />
      <div className="container">
        <div className="d-flex justify-content-center align-self-center">
          <div className="card col-sm-6">
            <div className="card-block">
              <div className="card-title text-center">
               <h1 style={{ marginBottom: '20px' }}> {title} </h1>
              </div>
              <div className="card-body">
                {body}
              </div>
              {footer && <div className="card-footer">
                {footer}
              </div>}
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}