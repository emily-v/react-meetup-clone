import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function EventOverview(props){
    return (
        <div className="card mb-4">
            <h2 className="card-header">April 28</h2>
            <div className="row pt-3">
                <div className="col-4 text-center">
                    <h3>7:00 pm</h3>
                </div>
                <div className="col">
                    <h4><Link to={"/event"}>Nth Event for Meetup X</Link></h4>
                    <p><Link to={"/group"}>Meetup X</Link></p>
                </div>
            </div>
        </div>
    );
}

/*BlogJumbotron.propTypes = {
        title: PropTypes.string,
        subHeadline: PropTypes.string
    };*/

export default EventOverview;