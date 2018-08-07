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
                            var group = selected[0];
                            if (selected.length <= 0){
                                return <h3>Loading...</h3>;
                            }
                                return <GroupJumbotron 
                                        ID={group.ID}
                                        post_title={group.post_title}
                                        post_content={group.post_content}
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
                                        state.isLoading ? (<p>Loading...</p>)
                                        :
                                        state.events.map((item,index)=>{
                                            if (item.meta_keys._meetup === (this.props.match.params.theid)) {
                                                return <EventOverview 
                                                        key={index}
                                                        ID={item.ID}
                                                        post_title={item.post_title}
                                                        day={item.meta_keys.day}
                                                        time={item.meta_keys.time}
                                                        post_content={item.post_content}
                                                        _rsvpYes={item.meta_keys._rsvpYes}
                                                        _rsvpNo={item.meta_keys._rsvpNo}
                                                        _meetup={item.meta_keys._meetup}
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
    
    