import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Footer(props) {
	return (
		<footer className="bg-dark text-center py-2">
			<Link to={"/"}>
				<img
					className="img-fluid py-3"
					src="https://www.4geeksacademy.co/wp-content/themes/the-fastest/assets/img/logo-white.png"
				/>
			</Link>
		</footer>
	);
}

export default Footer;
