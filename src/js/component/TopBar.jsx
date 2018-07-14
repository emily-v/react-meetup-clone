import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export class TopBar extends React.Component{
    
    render(){
        return (
            <div>
                <nav className="navbar navbar-nav navbar-expand-sm bg-dark d-flex justify-content-between pl-3">
                    <Link to={"/"} className="nav-item">
                        <img src="http://via.placeholder.com/150x50" />
                    </Link>
                    <button type="button" className="nav-item btn btn-primary" href="#">Login</button>
                </nav>
            </div>
        );
    }
}


/*<Consumer>
    {
        state,actions... => {
            state.session && typeof(state.session.user_nicename) !== 'undefined'?
        }
    }*/