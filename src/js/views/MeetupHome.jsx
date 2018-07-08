import React from 'react';

import TopBar from '../component/TopBar.jsx';
import HomeJumbotron from '../component/HomeJumbotron.jsx';
import EventOverview from '../component/EventOverview.jsx';

//create your first component
export class MeetupHome extends React.Component{
    
    render(){
        return (
            <div>
                <TopBar />
                <HomeJumbotron />
                <div className="container">
                    <EventOverview />
                    <EventOverview />
                    <EventOverview />
                </div>
            </div>
        );
    }
}
