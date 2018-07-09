import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function EventJumbotron(props){
    return (
        <div>
            <div className="jumbotron text-white text-right bg-dark">
                <div className="row">
                    <div className="col">
                        <img className="img-fluid" src="https://www.4geeksacademy.co/wp-content/themes/the-fastest/assets/img/logo-black.png"></img>
                        <h5>Apr 28</h5>
                        <h1>5th Event for meetup 1</h1>
                        <h3>Meetup 1</h3>
                        <a className="btn btn-primary btn-lg" href="#" role="button">Login</a>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default EventJumbotron;