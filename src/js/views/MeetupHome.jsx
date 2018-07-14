import React from 'react';

import Navbar from '../component/Navbar.jsx';
import HomeJumbotron from '../component/HomeJumbotron.jsx';
import EventOverview from '../component/EventOverview.jsx';
import Footer from '../component/Footer.jsx';

import {Consumer} from "../stores/AppContext.jsx";

//create your first component
export class MeetupHome extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <HomeJumbotron />
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <Consumer>
                                {({ state, actions }) => 
                                    (
                                        state.events.map((item,index)=>{
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
