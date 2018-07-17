import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

//WHY NOT WORKING?
//import FontAwesomeIcon from '@fortawesome/react-fontawesome';
//import faTw from '@fortawesome/fontawesome-free-brands/faTwitter';
//import faFa from '@fortawesome/fontawesome-free-brands/faFacebook';
//import faClock from '@fortawesome/fontawesome-free-solid/faClock';

import Navbar from '../component/Navbar.jsx';
//import EventJumbotron from '../component/EventJumbotron.jsx';
import EventDetails from '../component/EventDetails.jsx';
import Footer from '../component/Footer.jsx';

import {Consumer} from "../stores/AppContext.jsx";


//create your first component
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
                            
                            if(selected.length <=0) {return <h3>This event does not exsist</h3>;}
                            var event=selected [0];
                            
                            const yesDisabled = typeof event.RSVPYes !== 'undefined' && event.RSVPYes.includes(user.id)  ? "disabled" : "";
                            const noDisabled =typeof event.RSVPNo !== 'undefined' && event.RSVPNo.includes(user.id)  ? "disabled" : "";
                            
                            return (
                                <div>
                                    <div className="jumbotron text-white text-right bg-dark">
                                        <div className="row">
                                            <div className="col text-left">
                                                <h5><Moment format="MMM D">{event.dateTime}</Moment></h5>
                                                <h1>{event.name}</h1>
                                                <h4>Meetup {event.meetupID}</h4>{/*change to meetup group name*/}
                                            </div>
                                            <div className="card text-white text-center bg-secondary mb-3">
                                                <div className="card-body">
                                                    <h2 className="card-title">{event.RSVPYes.length} People Going</h2>
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

                                                    {/*<div className="text-center">
                                                        <FontAwesomeIcon icon={faTw} />
                                                        <FontAwesomeIcon icon={faFa} />
                                                    </div>*/}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <EventDetails
                                    ID={event.ID}
                                    name={event.name}
                                    dateTime={event.dateTime}
                                    description={event.description}
                                    location={event.location}
                                    RSVPYes={event.RSVPYes}
                                    RSVPNo={event.RSVPNo}
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