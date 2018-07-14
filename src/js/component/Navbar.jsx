import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {withSession} from '../stores/AppContext.jsx';
import $ from "jquery";
import {Consumer} from "../stores/AppContext.jsx";

class Navbar extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
          username: '',
          password: '',
          modal: false
        };
    }
    
    componentDidUpdate(prevProps, prevState) {
        // Previous ThemeContext value is prevProps.theme
        // New ThemeContext value is this.props.theme
        if(this.props.session.token) $('#exampleModal').modal('hide');
    }
    
    render(){
        let homeActive = this.props.currentView === "home" ? "active" :"";
        
        const {session, actions} = this.props;
        
        return(
            <div>
                <nav className="navbar navbar-light bg-light justify-content-between navbar-expand-sm">
                    <Link className="navbar-brand" to="/">
                        <img className="img-fluid" src="https://www.4geeksacademy.co/wp-content/themes/the-fastest/assets/img/logo-black.png" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {
                                session && typeof(session.user_nicename) !== 'undefined' ?
                                    
                                    <div className="d-flex">
                                        <Link className="nav-item nav-link " to={"/user/"+session.user_nicename.value}>
                                                Hello, {session.user_display_name.charAt(0).toUpperCase()+session.user_display_name.substring(1)}
                                        </Link>
                                        <a className="nav-item nav-link" href="#" onClick={() => actions.logout()}>
                                                Logout
                                        </a>
                                    </div>
                                :
                                    
                                    <button 
                                        type="button" 
                                        className="btn btn-primary" 
                                        data-toggle="modal" 
                                        data-target="#exampleModal">Login</button>
                                
                                
                            }

                        </div>
                    </div>
                </nav>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form role="form" onSubmit={(e) => {
                                                                    e.preventDefault();
                                                                    actions.loadSession(this.state.username, this.state.password);
                                }}>
                                    <div className="form-group">
                                        <input type="text" name="user" value={this.state.user} placeholder="Username" onChange={(e) => this.setState({username: e.target.value})} />
                                        <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={(e) => this.setState({password: e.target.value})} />
                                    </div>
                                    <input type="submit" value="Login" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}
export default withSession(Navbar);
Navbar.propTypes = {
  session: PropTypes.object,
  actions: PropTypes.object,
  currentView: PropTypes.string
};
