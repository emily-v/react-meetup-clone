import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function EventOverview(props){
    return (
        <div className="container">
            <div className="card">
                <h2 className="card-header">April 28</h2>
                <p className="card-text">Event time and date...</p>
            </div>
        </div>
    );
}

/*BlogJumbotron.propTypes = {
        title: PropTypes.string,
        subHeadline: PropTypes.string
    };*/

export default EventOverview;