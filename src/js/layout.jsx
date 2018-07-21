/*-------TO DO FOR THIS PROJECT---------
-Change "Meetup N" to name of meetup group
-Address change of RSVP response
*/

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
                /*{ 
                    ID:1,
                    name:"Coding Weekends",
                    description: "Fun time coding with a community of passionate developers!",
                    listOfEvents: [10,20,30]
                },*/
            ],
            "events":[
                /*{
                    ID: 10,
                    name: "First Event of Meetup 1",
                    dateTime: "August 22 6:40 pm",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a malesuada diam. Donec porta varius est nec lobortis. Curabitur consectetur in risus ut aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vitae magna pulvinar, rhoncus leo ac, accumsan metus. Vestibulum mattis placerat ex id varius. Maecenas sit amet luctus orci. Nunc tempor id tellus sed gravida. Aenean ut lacus sed leo congue euismod non ac ligula. Morbi rhoncus blandit magna in tincidunt. Nulla ipsum turpis, ultrices at commodo venenatis, tincidunt at ligula. Suspendisse eget tortor ac lacus luctus accumsan a sit amet erat. Vivamus tincidunt pharetra consectetur.",
                    location: "Miami, FL",
                    RSVPYes: [100,200,300,400],
                    RSVPNo: [111,222,333],
                    meetupID: 1
                },*/
            ],
            "session":{
                    
            },
            "isLoading": false
        };
        
        this.actions = {
            "loadSession": (receivedUsername, receivedPassword) => { //need to change key and value names?
                this.setState(
                    {
                        session: {
                            id:1000,
                            username:receivedUsername,
                            password:receivedPassword,
                            token: "ghdgtege12422526161gsdhdbu"
                        }
                        
                    });
                    
                    var data = {
                        "username":receivedUsername, 
                        "password":receivedPassword
                      };
                      
                    fetch('https://wordpress-breathecode-cli-nachovz.c9users.io/wp-json/jwt-auth/v1/token',
                    {
                      method: 'POST',
                      body: JSON.stringify(data),
                      headers: new Headers({
                        'Content-Type': 'application/json'
                        })
                    })
                    .then( (response) => response.json())
                    .then( (data) => {
                        
                        if (typeof(data.token) === "undefined" ) throw new Error(data.message);
                        this.setState({session: data});
                        
                        //ReactGA.set({ userId: data.user_nicename });
                    })
                    .catch(error => console.log(error));
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
            },
            
            "loadInitialData": () => {
                
                fetch('https://wordpress-breathecode-cli-nachovz.c9users.io/wp-json/sample_api/v1/events')
                    .then(response => response.json())
                    .then(data => this.setState({ events: data, isLoading: false }))
                    .catch(error => console.log(error));
                    
            fetch('https://wordpress-breathecode-cli-nachovz.c9users.io/wp-json/sample_api/v1/meetups')
                    .then(response => response.json())
                    .then(data => this.setState({ meetups: data }))
                    .catch(error => console.log(error));
            }
        };
    }
            
    componentDidMount() {
    this.actions.loadInitialData();
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
                        </Provider>
                        {/*<Route render={() => <h1>Not found!</h1>} />*/}
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}