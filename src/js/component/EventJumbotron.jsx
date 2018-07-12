import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import {Consumer} from "../stores/AppContext.jsx";

function EventJumbotron(props){
    return (
        <div>
            <div className="jumbotron text-white text-right bg-dark">
                <div className="row">
                    <div className="col text-left">
                        <h5>{props.dateTime}</h5>
                        <h1>{props.name}</h1>
                        <h4 className="text-primary">{props.meetupID}</h4>
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
    );
}

EventJumbotron.propTypes = {
        dateTime: PropTypes.string,
        name: PropTypes.string,
        meetupID: PropTypes.number
    };


export default EventJumbotron;