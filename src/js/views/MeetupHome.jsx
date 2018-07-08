import React from 'react';

import HomeJumbotron from '../component/HomeJumbotron.jsx';
import EventOverview from '../component/EventOverview.jsx';

//create your first component
export class MeetupHome extends React.Component{
    
    render(){
        return (
            <div>
                <HomeJumbotron />
                <EventOverview />
                <EventOverview />
                <EventOverview />
            </div>
        );
    }
}
