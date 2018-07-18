import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Moment from 'react-moment';

//import {Consumer} from "../stores/AppContext.jsx";

function EventOverview(props){
    return (
        <div className="card mb-4">
            <h2 className="card-header"><Moment format="MMMM D">{props.meta_keys.day}</Moment></h2>
            <div className="row pt-3">
                <div className="col-4 text-center">
                    <h3><Moment format="h:mm a">{props.meta_keys.time}</Moment></h3>
                </div>
                <div className="col">
                    <h4><Link to={"/event/"+props.ID}>{props.post_title}</Link></h4>
                    <p><Link to={"/group/"+props.meta_keys._meetup}>Meetup {props.meta_keys._meetup}{/*change to meetup group name*/}</Link></p>
                </div>
            </div>
        </div>
    );
}

EventOverview.propTypes = {
        meta_keys: PropTypes.object,
        post_title: PropTypes.string,
        ID: PropTypes.number
    };

export default EventOverview;