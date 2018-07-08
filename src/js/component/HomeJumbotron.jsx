import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function HomeJumbotron(props){
    return (
        <div>
            <div className="jumbotron text-white text-center bg-dark">
                <div className="row">
                    <div className="col">
                        <h1>The Meetup Clone</h1>
                        <p>This is a mini-project for <a href="#">4Geeks Academy</a></p>
                        <p className="lead mb-0">Using: Bootstrap, React, React-router</p>
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

export default HomeJumbotron;