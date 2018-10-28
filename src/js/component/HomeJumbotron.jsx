import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Consumer } from "../stores/AppContext.jsx";

function HomeJumbotron(props) {
	return (
		<div className="jumbotron-fluid text-white bg-dark p-1 mb-3">
			<div className="container-fluid text-center mx-auto my-4 pt-3 pb-0">
				<h1>The Meetup Clone</h1>
				<p className="lead">
					This is a mini-project for <a href="#">4Geeks Academy</a>
				</p>
				<p>Using: Bootstrap, React, React-router</p>
			</div>
		</div>
	);
}

/*BlogJumbotron.propTypes = {
        title: PropTypes.string,
        subHeadline: PropTypes.string
    };*/

export default HomeJumbotron;
