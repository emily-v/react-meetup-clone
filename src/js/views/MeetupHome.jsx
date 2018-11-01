import React from "react";

import Navbar from "../component/Navbar.jsx";
import HomeJumbotron from "../component/HomeJumbotron.jsx";
import EventOverview from "../component/EventOverview.jsx";
import Footer from "../component/Footer.jsx";

import { Consumer } from "../stores/AppContext.jsx";

//create your first component
export class MeetupHome extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<HomeJumbotron />
				<div className="container">
					<div className="row">
						<div className="col-md-8 mx-auto">
							<Consumer>
								{({ state, actions }) =>
									state.isLoading ? (
										<p>Loading in progress</p>
									) : (
										state.events.map((item, index) => {
											return (
												<EventOverview
													key={index}
													ID={item.ID}
													post_title={item.post_title}
													day={item.meta_keys.day}
													time={item.meta_keys.time}
													post_content={
														item.post_content
													}
													_rsvpYes={
														item.meta_keys._rsvpYes
													}
													_rsvpNo={
														item.meta_keys._rsvpNo
													}
													_meetup={
														item.meta_keys._meetup
													}
												/>
											);
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
