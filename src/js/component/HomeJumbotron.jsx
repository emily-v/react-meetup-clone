import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function HomeJumbotron(props){
    return (
        <div className="jumbotron-fluid text-white text-center bg-dark p-1 mb-3">
            <div className="container-fluid p-0">
                <div className="row text-center mx-auto my-4 pt-3 d-block">
                    <h1>The Meetup Clone</h1>
                    <p className="lead">This is a mini-project for <a href="#">4Geeks Academy</a></p>
                    <p>Using: Bootstrap, React, React-router</p>
                </div>
            </div>
        </div>
        );
}

/*BlogJumbotron.propTypes = {
        title: PropTypes.string,
        subHeadline: PropTypes.string
    };*/

export default HomeJumbotron;
