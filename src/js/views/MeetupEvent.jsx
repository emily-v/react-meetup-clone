import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

import Navbar from '../component/Navbar.jsx';
//import EventJumbotron from '../component/EventJumbotron.jsx';
import EventDetails from '../component/EventDetails.jsx';
import Footer from '../component/Footer.jsx';

import {Consumer} from "../stores/AppContext.jsx";


export class MeetupEvent extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            login: false
        };
    }
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <Consumer>
                    {({ state, actions }) => {
                            
                            var user = state.session;
                            var selected=state.events.filter(item => {
                                return item.ID === parseInt (this.props.match.params.theid);
                            });
                            
                            if(selected.length <=0) {return <h3>This event does not exsist</h3>;} //or if(!selected) / Loading ??
                            var event=selected [0];
                            
                            const yesDisabled = typeof event.meta_keys._rsvpYes !== 'undefined' && event.meta_keys._rsvpYes.includes(user.id)  ? "disabled" : "";
                            const noDisabled =typeof event.meta_keys._rsvpNo !== 'undefined' && event.meta_keys._rsvpNo.includes(user.id)  ? "disabled" : "";
                            
                            return (
                                <div>
                                    <div className="jumbotron text-white text-right bg-dark">
                                        <div className="row">
                                            <div className="col text-left">
                                                <h5><Moment format="MMM D">{event.meta_keys.day}</Moment></h5>
                                                <h1>{event.post_title}</h1>
                                                <h4>Meetup {event.meta_keys._meetup}</h4>{/*change to meetup group name*/}
                                            </div>
                                            <div className="card text-white text-center bg-secondary mb-3">
                                                <div className="card-body pb-1">
                                                    <h2 className="card-title">{event.meta_keys._rsvpYes.length} People Going</h2>
                                                    {!user.token ?
                                                        <button type="button"
                                                                className="btn btn-primary"
                                                                data-toggle="modal"
                                                                data-target="#exampleModal"
                                                                onClick={ () => this.setState({login:true})}>
                                                                Login to RSVP
                                                        </button>
                                                    :
                                                        <div>
                                                            <button type="button"
                                                                    className="btn btn-primary mr-1"
                                                                    disabled={yesDisabled}
                                                                    onClick={() => actions.rsvpEvent(   this.props.match.params.theid,
                                                                                                        user.id,
                                                                                                        "yes",
                                                                                                        user.token)}>
                                                                    Yes
                                                            </button>
                                                            <button type="button"
                                                                    className="btn btn-primary ml-1"
                                                                    disabled={noDisabled}
                                                                    onClick={() => actions.rsvpEvent(   this.props.match.params.theid,
                                                                                                        user.id,
                                                                                                        "no",
                                                                                                        user.token)}>
                                                                    No
                                                            </button>
                                                        </div>
                                                    }

                                                    <div className="text-center">
                                                        <FontAwesomeIcon icon={faTwitter} className="h3 m-2"/>
                                                        <FontAwesomeIcon icon={faFacebook} className="h3 m-2"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <EventDetails
                                    ID={event.ID}
                                    name={event.post_title}
                                    day={event.meta_keys.day}
                                    time={event.meta_keys.time}
                                    post_content={event.post_content}
                                    _rsvpYes={event.meta_keys._rsvpYes}
                                    _rsvpNo={event.meta_keys._rsvpNo}
                                    />
                                </div>
                                );
                        }
                }
                </Consumer>
                <Footer />
            </React.Fragment>
        );
    }
}

MeetupEvent.propTypes = {
        match: PropTypes.object
    };
    
    /*<EventJumbotron 
        ID={event.ID}
        name={event.name}
        dateTime={event.dateTime}
        description={event.description}
        location={event.location}
        RSVPYes={event.RSVPYes}
        RSVPNo={event.RSVPNo}
        />*/