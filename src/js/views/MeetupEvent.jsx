import React from 'react';

import TopBar from '../component/TopBar.jsx';
import EventJumbotron from '../component/EventJumbotron.jsx';
import EventDetails from '../component/EventDetails.jsx';
import Footer from '../component/Footer.jsx';


//create your first component
export class MeetupEvent extends React.Component{
    
    render(){
        return (
            <React.Fragment>
           
                <TopBar />
                <EventJumbotron />
                <EventDetails />
                <Footer />
      
            </React.Fragment>
             
        );
    }
}