import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

//import {Consumer} from "../stores/AppContext.jsx";//

function EventOverview(props){
    return (
        <div className="card mb-4">
            <h2 className="card-header">{props.dateTime}</h2>
            <div className="row pt-3">
                <div className="col-4 text-center">
                    <h3>{props.dateTime}</h3>
                </div>
                <div className="col">
                    <h4><Link to={"/event"}>{props.name}</Link></h4>
                    <p><Link to={"/group/"+props.meetupID}>Meetup {props.meetupID}</Link></p>
                </div>
            </div>
        </div>
    );
}

EventOverview.propTypes = {
        dateTime: PropTypes.string,
        name: PropTypes.string,
        meetupID: PropTypes.number
    };

export default EventOverview;