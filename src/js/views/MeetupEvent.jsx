import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../component/Navbar.jsx';
import EventJumbotron from '../component/EventJumbotron.jsx';
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
                            
                            var user = state.session; //added from Nacho's. Where else is 'user' used?
                            var selected=state.events.filter(item => {
                                return item.ID === parseInt (this.props.match.params.theid);
                            });
                            
                            if(selected.length <=0) {return <h3>This event does not exsist</h3>;}
                            var event=selected [0];
                            
                            return (
                                <div>
                                    <div className="jumbotron text-white text-right bg-dark">
                                        <div className="row">
                                            <div className="col text-left">
                                                <h5>{event.dateTime}</h5>
                                                <h1>{event.name}</h1>
                                                <h4>Meetup {event.meetupID}</h4>{/*change to meetup group name*/}
                                            </div>
                                            <div className="card text-white text-center bg-secondary mb-3">
                                                <div className="card-body">
                                                    <h2 className="card-title">3 People Going</h2>{/*change to show length of Yes RSVP's*/}
                                                    {!user.token ?
                                                        <button type="button"
                                                                className="btn btn-primary"
                                                                data-toggle="modal" //check if correct toggle attribute
                                                                data-target="#exampleModal" //check if correct id
                                                                onClick={ () => this.setState({login:true})}>
                                                                Login to RSVP
                                                        </button>
                                                    :
                                                        <div>
                                                            <button type="button"
                                                                    className="btn btn-primary mr-1" //need w-100 yesBTN??
                                                                    //disabled={yesDisabled} //where is this function?
                                                                    onClick={() => this.actions.rsvpEvent(   this.props.match.params.theid,
                                                                                                        user.ID,
                                                                                                        "yes",
                                                                                                        user.token)}>
                                                                    Yes
                                                            </button>
                                                            <button type="button"
                                                                    className="btn btn-primary ml-1" //need w-100 noBTN??
                                                                    //disabled={noDisabled} //where is this function?
                                                                    onClick={() => this.actions.rsvpEvent(   this.props.match.params.theid,
                                                                                                        user.ID,
                                                                                                        "no",
                                                                                                        user.token)}>
                                                                    No
                                                            </button>
                                                        </div>
                                                    }
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
                                    
                                    
                                    
                                    /*<EventJumbotron 
                                    ID={event.ID}
                                    name={event.name}
                                    dateTime={event.dateTime}
                                    description={event.description}
                                    location={event.location}
                                    RSVPYes={event.RSVPYes}
                                    RSVPNo={event.RSVPNo}
                                    />*/

                                    
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

                    {/*search(event.id===theid)
                    item.ID === this.props.match.params.theid*/}