import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import {MeetupHome} from "./views/MeetupHome.jsx";
import {MeetupGroup} from "./views/MeetupGroup.jsx";
import {MeetupEvent} from "./views/MeetupEvent.jsx";

export default class Layout extends React.Component {
    
    constructor(){
        super();
        
        this.state = {
            "meetups":[
            { 
                id:1,
                name:"Coding Weekends",
                description: "Fun time coding with a community of passionate developers!",
                listOfEvents: [10,20,30]
            },
            {   
                id:2,
                name:"Information Sessions",
                description: "Come and learn about the fun things going on at 4 Geeks academy, learning your first bit of code. Refreshements will be served.",
                listOfEvents: [40,50,60]
            },
            { 
                id:3,
                name:"Pitch Night",
                description: "Come out and watch the latest crop of passionate developers present there first project. Refreshements will be served.",
                listOfEvents: [70,80,90]
            }
                ],
            "events":[],
            "session":{},
            "isLoading": true
        };
    }

    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={MeetupHome} />
                        <Route path="/group" component={MeetupGroup} />
                        <Route path="/event" component={MeetupEvent} />
                        <Route render={() => <h1>Not found!</h1>} />
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}