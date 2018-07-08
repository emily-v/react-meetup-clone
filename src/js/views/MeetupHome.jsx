import React from 'react';

import TopBar from '../component/TopBar.jsx';
import HomeJumbotron from '../component/HomeJumbotron.jsx';
import EventOverview from '../component/EventOverview.jsx';

//create your first component
export class MeetupHome extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <TopBar />
                <HomeJumbotron />
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <EventOverview />
                            <EventOverview />
                            <EventOverview />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
