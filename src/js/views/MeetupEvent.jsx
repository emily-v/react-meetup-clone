import React from 'react';
import PropTypes from 'prop-types';

import TopBar from '../component/TopBar.jsx';
import EventJumbotron from '../component/EventJumbotron.jsx';
import EventDetails from '../component/EventDetails.jsx';
import Footer from '../component/Footer.jsx';

import {Consumer} from "../stores/AppContext.jsx";


//create your first component
export class MeetupEvent extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <TopBar />
                <Consumer>
                    {({ state, actions }) => {
                            
                            var selected=state.events.filter(item => {
                                return item.ID === this.props.match.params.theid;
                            });
                            
                            if(selected.length <=0) return <h3>This event does not exsist</h3>;
                            var event=selected [0];
        
                                <React.Fragment>
                                    <EventJumbotron 
                                    ID={item.ID}
                                    name={item.name}
                                    dateTime={item.dateTime}
                                    description={item.description}
                                    location={item.location}
                                    RSVPYes={item.RSVPYes}
                                    RSVPNo={item.RSVPNo}
                                    />
        
                                    <EventDetails
                                    ID={item.ID}
                                    name={item.name}
                                    dateTime={item.dateTime}
                                    description={item.description}
                                    location={item.location}
                                    RSVPYes={item.RSVPYes}
                                    RSVPNo={item.RSVPNo}
                                    />
                                </React.Fragment>;
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