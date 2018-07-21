import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Moment from 'react-moment';

import {Consumer} from "../stores/AppContext.jsx";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

function EventDetails(props){
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-7">
                        <img src="https://via.placeholder.com/800x500"></img>
                        <h2>Details</h2>
                        <p>Sunggle up with cute kitties, hot lattes, and a book. We host this event twice a month for a place to socialize or maybe come out for alternative therapy.</p>
                        <p>There are a few rules to follow for this event:</p>
                        <ul>
                            <li>You must purchase a beverage (e.g. coffee, tea, cocoa, etc)</li>
                            <li>Stay as long as you like but only 30 min with each cat</li>
                            <li>Be kind to cats and human alike</li>
                            <li>No children under 12 years old. This event is an escape for most people who attend</li>
                            <li>Must wear headphones for phone calls and music</li>
                        </ul>
                    </div>
                    <div className="d-flex flex-row-reverse">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-body">
                                    <FontAwesomeIcon icon={faClock} className="h3"/>
                                    <p className="mb-1"><Moment format="MMMM D">{props.day}</Moment></p>
                                    <p>{props.time}</p>
                                    {/*<p className="mb-1"><Moment format="MMMM D">{props.day}</Moment></p>
                                    <p><Moment format="h:mm a">{props.time}</Moment></p>*/}
                                    <p>Every first and last tuesday of the month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

EventDetails.propTypes = {
        day: PropTypes.string,
        time: PropTypes.string
    };


export default EventDetails;