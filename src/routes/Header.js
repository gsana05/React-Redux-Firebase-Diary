import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser, logout } from '../actions/userAction';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-toggleable-md bg-faded">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="fa fa-bars"></span>
            </button>
            <div className="container">
              <Link className="navbar-brand" to="/">Diary 2018</Link>

              <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav ml-auto">
                            {this.props.user === null ? (
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                            ) : (
                                <li>
                                    <Link to="/logout" onClick={() => this.props.logout()}>
                                        logout
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
           
        
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps, { getUser, logout })(Header);