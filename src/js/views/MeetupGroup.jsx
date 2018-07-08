import React from 'react';

import TopBar from '../component/TopBar.jsx';
import GroupJumbotron from '../component/GroupJumbotron.jsx';
import EventOverview from '../component/EventOverview.jsx';

//create your first component
export class MeetupGroup extends React.Component{
    
    render(){
        return (
            <div>
                <TopBar />
                <GroupJumbotron />
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <h4>Next Events</h4>
                            <EventOverview />
                            <EventOverview />
                            <EventOverview />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}