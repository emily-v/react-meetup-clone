import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import {MeetupHome} from "./views/MeetupHome.jsx";
import {MeetupGroup} from "./views/MeetupGroup.jsx";
import {MeetupEvent} from "./views/MeetupEvent.jsx";

import {Provider} from "./stores/AppContext.jsx";

export default class Layout extends React.Component {
    
    constructor(){
        super();
        
        this.state = {
            "meetups":[
                { 
                    ID:1,
                    name:"Coding Weekends",
                    description: "Fun time coding with a community of passionate developers!",
                    listOfEvents: [10,20,30]
                },
                {   
                    ID:2,
                    name:"Information Sessions",
                    description: "Come and learn about the fun things going on at 4 Geeks academy, learning your first bit of code. Refreshements will be served.",
                    listOfEvents: [40,50,60]
                },
                { 
                    ID:3,
                    name:"Pitch Night",
                    description: "Come out and watch the latest crop of passionate developers present there first project. Refreshements will be served.",
                    listOfEvents: [70,80,90]
                }
            ],
            "events":[
                {
                    ID: 10,
                    name: "First Event of Meetup 1",
                    dateTime: "August 22 6:40 pm",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a malesuada diam. Donec porta varius est nec lobortis. Curabitur consectetur in risus ut aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vitae magna pulvinar, rhoncus leo ac, accumsan metus. Vestibulum mattis placerat ex id varius. Maecenas sit amet luctus orci. Nunc tempor id tellus sed gravida. Aenean ut lacus sed leo congue euismod non ac ligula. Morbi rhoncus blandit magna in tincidunt. Nulla ipsum turpis, ultrices at commodo venenatis, tincidunt at ligula. Suspendisse eget tortor ac lacus luctus accumsan a sit amet erat. Vivamus tincidunt pharetra consectetur.",
                    location: "Miami, FL",
                    RSVPYes: [100,200,300],
                    RSVPNo: [111,222,333],
                    meetupID: 1
                },
                {
                    ID: 20,
                    name: "Second Event of Meetup 1",
                    dateTime: "August 23 6:40 pm",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a malesuada diam. Donec porta varius est nec lobortis. Curabitur consectetur in risus ut aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vitae magna pulvinar, rhoncus leo ac, accumsan metus. Vestibulum mattis placerat ex id varius. Maecenas sit amet luctus orci. Nunc tempor id tellus sed gravida. Aenean ut lacus sed leo congue euismod non ac ligula. Morbi rhoncus blandit magna in tincidunt. Nulla ipsum turpis, ultrices at commodo venenatis, tincidunt at ligula. Suspendisse eget tortor ac lacus luctus accumsan a sit amet erat. Vivamus tincidunt pharetra consectetur.",
                    location: "Coral Gables, FL",
                    RSVPYes: [100,200,300],
                    RSVPNo: [111,222,333],
                    meetupID: 1
                },
                {
                    ID: 30,
                    name: "Third Event of Meetup 1",
                    dateTime: "August 24 6:40 pm",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a malesuada diam. Donec porta varius est nec lobortis. Curabitur consectetur in risus ut aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vitae magna pulvinar, rhoncus leo ac, accumsan metus. Vestibulum mattis placerat ex id varius. Maecenas sit amet luctus orci. Nunc tempor id tellus sed gravida. Aenean ut lacus sed leo congue euismod non ac ligula. Morbi rhoncus blandit magna in tincidunt. Nulla ipsum turpis, ultrices at commodo venenatis, tincidunt at ligula. Suspendisse eget tortor ac lacus luctus accumsan a sit amet erat. Vivamus tincidunt pharetra consectetur.",
                    location: "Brickell",
                    RSVPYes: [100,200,300],
                    RSVPNo: [111,222,333],
                    meetupID: 1
                },
                {
                    ID: 40,
                    name: "First Event of Meetup 2",
                    dateTime: "August 22 6:40 pm",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a malesuada diam. Donec porta varius est nec lobortis. Curabitur consectetur in risus ut aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vitae magna pulvinar, rhoncus leo ac, accumsan metus. Vestibulum mattis placerat ex id varius. Maecenas sit amet luctus orci. Nunc tempor id tellus sed gravida. Aenean ut lacus sed leo congue euismod non ac ligula. Morbi rhoncus blandit magna in tincidunt. Nulla ipsum turpis, ultrices at commodo venenatis, tincidunt at ligula. Suspendisse eget tortor ac lacus luctus accumsan a sit amet erat. Vivamus tincidunt pharetra consectetur.",
                    location: "Four Seasons Miami",
                    RSVPYes: [100,200,300],
                    RSVPNo: [111,222,333],
                    meetupID: 2
                },
                {
                    ID: 50,
                    name: "Second Event of Meetup 2",
                    dateTime: "August 23 6:40 pm",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a malesuada diam. Donec porta varius est nec lobortis. Curabitur consectetur in risus ut aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vitae magna pulvinar, rhoncus leo ac, accumsan metus. Vestibulum mattis placerat ex id varius. Maecenas sit amet luctus orci. Nunc tempor id tellus sed gravida. Aenean ut lacus sed leo congue euismod non ac ligula. Morbi rhoncus blandit magna in tincidunt. Nulla ipsum turpis, ultrices at commodo venenatis, tincidunt at ligula. Suspendisse eget tortor ac lacus luctus accumsan a sit amet erat. Vivamus tincidunt pharetra consectetur.",
                    location: "Bayfront Park",
                    RSVPYes: [100,200,300],
                    RSVPNo: [111,222,333],
                    meetupID: 2
                },
                {
                    ID: 60,
                    name: "Third Event of Meetup 2",
                    dateTime: "August 24 6:40 pm",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a malesuada diam. Donec porta varius est nec lobortis. Curabitur consectetur in risus ut aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vitae magna pulvinar, rhoncus leo ac, accumsan metus. Vestibulum mattis placerat ex id varius. Maecenas sit amet luctus orci. Nunc tempor id tellus sed gravida. Aenean ut lacus sed leo congue euismod non ac ligula. Morbi rhoncus blandit magna in tincidunt. Nulla ipsum turpis, ultrices at commodo venenatis, tincidunt at ligula. Suspendisse eget tortor ac lacus luctus accumsan a sit amet erat. Vivamus tincidunt pharetra consectetur.",
                    location: "Flagler Street",
                    RSVPYes: [100,200,300],
                    RSVPNo: [111,222,333],
                    meetupID: 2
                },
                {
                    ID: 70,
                    name: "First Event of Meetup 3",
                    dateTime: "August 22 6:40 pm",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a malesuada diam. Donec porta varius est nec lobortis. Curabitur consectetur in risus ut aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vitae magna pulvinar, rhoncus leo ac, accumsan metus. Vestibulum mattis placerat ex id varius. Maecenas sit amet luctus orci. Nunc tempor id tellus sed gravida. Aenean ut lacus sed leo congue euismod non ac ligula. Morbi rhoncus blandit magna in tincidunt. Nulla ipsum turpis, ultrices at commodo venenatis, tincidunt at ligula. Suspendisse eget tortor ac lacus luctus accumsan a sit amet erat. Vivamus tincidunt pharetra consectetur.",
                    location: "Key West, FL",
                    RSVPYes: [100,200,300],
                    RSVPNo: [111,222,333],
                    meetupID: 3
                },
                {
                    ID: 80,
                    name: "Second Event of Meetup 3",
                    dateTime: "August 23 6:40 pm",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a malesuada diam. Donec porta varius est nec lobortis. Curabitur consectetur in risus ut aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vitae magna pulvinar, rhoncus leo ac, accumsan metus. Vestibulum mattis placerat ex id varius. Maecenas sit amet luctus orci. Nunc tempor id tellus sed gravida. Aenean ut lacus sed leo congue euismod non ac ligula. Morbi rhoncus blandit magna in tincidunt. Nulla ipsum turpis, ultrices at commodo venenatis, tincidunt at ligula. Suspendisse eget tortor ac lacus luctus accumsan a sit amet erat. Vivamus tincidunt pharetra consectetur.",
                    location: "Key Biscayne",
                    RSVPYes: [100,200,300],
                    RSVPNo: [111,222,333],
                    meetupID: 3
                },
                {
                    ID: 90,
                    name: "Third Event of Meetup 3",
                    dateTime: "August 24 6:40 pm",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a malesuada diam. Donec porta varius est nec lobortis. Curabitur consectetur in risus ut aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vitae magna pulvinar, rhoncus leo ac, accumsan metus. Vestibulum mattis placerat ex id varius. Maecenas sit amet luctus orci. Nunc tempor id tellus sed gravida. Aenean ut lacus sed leo congue euismod non ac ligula. Morbi rhoncus blandit magna in tincidunt. Nulla ipsum turpis, ultrices at commodo venenatis, tincidunt at ligula. Suspendisse eget tortor ac lacus luctus accumsan a sit amet erat. Vivamus tincidunt pharetra consectetur.",
                    location: "Islamorada",
                    RSVPYes: [100,200,300],
                    RSVPNo: [111,222,333],
                    meetupID: 3
                }
            ],
            "session":{
                    id:1,
                    username:"Sally23",
                    password: "12345",
                    listOfEvents: "ghdgtege12422526161gsdhdbu"
            },
            "isLoading": true
        };
        
        this.actions = {
            "loadSession": (receivedUsername, receivedPassword) => {
                this.setState(
                    {
                        session: {
                            id:1,
                            username:"Sally23",
                            password: "12345",
                            listOfEvents: "ghdgtege12422526161gsdhdbu"
                        }
                        
                    });
            },
            "rsvpEvent": (id, userId, answer, token) => {
                var indexOfEvent = 0;
                var theArrayWithEvent = this.state.events.filter( (item, index) => {
                    
                    if(item.ID === parseInt(id)){
                        indexOfEvent = index;
                        return true;
                    }
                    
                });
                let event = theArrayWithEvent[0];
                
                if(answer === "yes"){
                    event.meta_keys._rsvpYes.push(userId);
                }else{
                    event.meta_keys._rsvpNo.push(userId);
                }
                
                var tempArray = this.state.events;
                tempArray[indexOfEvent] = event;
                
                this.setState({"events": tempArray});
                }
            
        };
        
    }

    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Switch>
                        <Provider value={{state:this.state, actions:this.actions}}>
                            <Route exact path="/" component={MeetupHome} />
                            <Route path="/group/:theid" component={MeetupGroup} />
                            <Route path="/event/:theid" component={MeetupEvent} />
                            {/*<Route render={() => <h1>Not found!</h1>} />*/}
                        </Provider>
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}