import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function Footer(props){
    return (
        <footer className="bg-dark text-center py-2">
            <Link to={"/"}>
                <img src="http://via.placeholder.com/150x50" />
            </Link>
        </footer>
        );
}

export default Footer;