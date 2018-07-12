import React from 'react';

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
                {/*<EventJumbotron />
                <EventDetails />*/}
                <Consumer>
                    {({ state, actions }) => 
                    (
                        state.events.map((item,index)=>{
                            return <EventJumbotron 
                                    key={index}
                                    ID={item.ID}
                                    name={item.name}
                                    dateTime={item.dateTime}
                                    description={item.description}
                                    location={item.location}
                                    RSVPYes={item.RSVPYes}
                                    RSVPNo={item.RSVPNo}
                                    />;
                                        
                        })
                        
                    )
                    }
                    
                </Consumer>
                <Consumer>
                    {({ state, actions }) => 
                    (
                        state.events.map((item,index)=>{
                            return <EventDetails 
                                    key={index}
                                    ID={item.ID}
                                    name={item.name}
                                    dateTime={item.dateTime}
                                    description={item.description}
                                    location={item.location}
                                    RSVPYes={item.RSVPYes}
                                    RSVPNo={item.RSVPNo}
                                    />;
                                        
                        })
                        
                    )
                    }
                    
                </Consumer>
                <Footer />
            </React.Fragment>
        );
    }
}


{/*<Consumer>
    {({ state, actions }) => 
    (
        state.events.map((item,index)=>{
            return <EventInfo 
                    key={index}
                    ID={item.ID}
                    name={item.name}
                    dateTime={item.dateTime}
                    description={item.description}
                    location={item.location}
                    RSVPYes={item.RSVPYes}
                    RSVPNo={item.RSVPNo}
                    />;
            
        })
        
    )
}
</Consumer>*/}