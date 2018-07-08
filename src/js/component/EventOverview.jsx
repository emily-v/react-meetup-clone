import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function EventOverview(props){
    return (
        <div className="container">
            <div className="card">
                <h2 className="card-header">April 28</h2>
                <div className="row">
                    <div className="col-3">
                        <p>7:00 pm</p>
                    </div>
                    <div className="col">
                        <div className="row">
                            <p><a href="#">nth Event for meetup x</a></p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <p className="text-small"><a href="#">Meetup x</a></p>
                        </div>
                    </div>
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