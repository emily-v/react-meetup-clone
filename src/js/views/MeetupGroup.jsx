import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../component/Navbar.jsx';
import GroupJumbotron from '../component/GroupJumbotron.jsx';
import EventOverview from '../component/EventOverview.jsx';
import Footer from '../component/Footer.jsx';

import {Consumer} from "../stores/AppContext.jsx";

//create your first component
export class MeetupGroup extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <Consumer>
                    {({ state, actions }) => 
                        {
                            var selected = state.meetups.filter(item=>item.ID === parseInt(this.props.match.params.theid));
                            if (selected.length <= 0){
                                return <h3 className="text-danger">Invalid ID</h3>;
                            }
                            var group = selected[0];
                                    return <GroupJumbotron 
                                            ID={group.ID}
                                            name={group.name}
                                            description={group.description}
                                            listOfEvents={group.listOfEvents}
                                            />;
                                    
                        }
                    }
                </Consumer>
                
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <h4>Next Events</h4>
                            <Consumer>
                                {({ state, actions }) => 
                                    (
                                        state.events.map((item,index)=>{
                                            if (item.meetupID === parseInt(this.props.match.params.theid)) {
                                                return <EventOverview 
                                                        key={index}
                                                        ID={item.ID}
                                                        name={item.name}
                                                        dateTime={item.dateTime}
                                                        description={item.description}
                                                        location={item.location}
                                                        RSVPYes={item.RSVPYes}
                                                        RSVPNo={item.RSVPNo}
                                                        meetupID={item.meetupID}
                                                        />;
                                            }        
                                            
                                        })
                                    )
                                }
                            </Consumer>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

MeetupGroup.propTypes = {
    match: PropTypes.object
    };
    
    