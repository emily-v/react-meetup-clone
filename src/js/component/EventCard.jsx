import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Moment from "react-moment";

//import {Consumer} from "../stores/AppContext.jsx";

function EventCard(props) {
	let eventTime = props.time;
	const segments = eventTime.split(":");
	eventTime = parseInt(segments[0]) + ":" + segments[1];
	return (
		<div className="card mb-4">
			<h2 className="card-header">
				<Moment format="MMMM D">{props.day}</Moment>
			</h2>
			<div className="row pt-3">
				<div className="col-4 text-center">
					{/*<h3>
						<Moment format="h:mm">
							{props.time}
						</Moment>
					</h3>*/}
					<h3>{eventTime} pm</h3>
				</div>
				<div className="col">
					<h4>
						<Link to={"/event/" + props.ID}>
							{props.post_title}
						</Link>
					</h4>
					<p>
						<Link to={"/group/" + props._meetup}>
							Meetup {props._meetup}
							{/*change to meetup group name*/}
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}

EventCard.propTypes = {
	_meetup: PropTypes.string,
	post_title: PropTypes.string,
	ID: PropTypes.number,
	day: PropTypes.string,
	time: PropTypes.string
};

export default EventCard;
