import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import {Consumer} from "../stores/AppContext.jsx";

function GroupJumbotron(props){
    return (
        <div className="jumbotron-fluid text-white bg-dark p-1 mb-3">
            <div className="container-fluid p-0">
                <div className="row mx-auto my-4 pt-3">
                    <div className="col-md-6 px-4">
                        <img className="img-fluid" src="http://via.placeholder.com/600x350" />
                    </div>
                    <div className="col-md-6 px-4">
                        <h3>Meetup {props.ID}</h3>
                        <p className="my-1"><small className="text-muted">Location</small></p>
                        <p>Miami, FL</p>
                    </div>
                </div>
            </div>
        </div>
        );
}

GroupJumbotron.propTypes = {
        ID: PropTypes.number
    };

export default GroupJumbotron;
