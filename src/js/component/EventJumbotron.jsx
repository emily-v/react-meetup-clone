import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function EventJumbotron(props){
    return (
        <div>
            <div className="jumbotron text-white text-right bg-dark">
                <div className="row">
                    <div className="col text-left">
                        {/*<img className="img-fluid" src="https://www.4geeksacademy.co/wp-content/themes/the-fastest/assets/img/logo-black.png"></img>*/}
                        <h5>Apr 28</h5>
                        <h1>5th Event for meetup 1</h1>
                        <h4 className="text-primary">Meetup 1</h4>
                    </div>
                    <div className="card text-white text-center bg-secondary mb-3">
                        <div className="card-body">
                            <h2 className="card-title">3 People Going</h2>
                            <a href="#" className="btn btn-primary">Login to RSVP</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<<<<<<< HEAD
    );
=======
        
        
        );
>>>>>>> 3816e8110db74914f17bb37039a7af14d0f63a5e
}


export default EventJumbotron;