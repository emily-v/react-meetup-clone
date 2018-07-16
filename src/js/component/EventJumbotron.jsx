import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

//import {Consumer} from "../stores/AppContext.jsx";

export class EventJumbotron extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            login: false
        };
    }
    
    render(){
        
        var user = this.state.session; //added from Nacho's. Where else is 'user' used?
        
        return (
            <div>
                <div className="jumbotron text-white text-right bg-dark">
                    <div className="row">
                        <div className="col text-left">
                            <h5>{event.dateTime}</h5>
                            <h1>{event.name}</h1>
                            <h4 className="text-primary">{event.meetupID}</h4>
                        </div>
                        <div className="card text-white text-center bg-secondary mb-3">
                            <div className="card-body">
                                <h2 className="card-title">{this.events.rsvpYes.length} People Going</h2>{/*change to show length of Yes RSVP's*/}
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
            </div>
        );
    }
}

EventJumbotron.propTypes = {
        dateTime: PropTypes.string,
        name: PropTypes.string,
        meetupID: PropTypes.number,
        match: PropTypes.object
    };