import React from "react";
import { Route } from "react-router-dom";
import propTypes from "prop-types";
import Burger from '../components/burger/Burger.js';
import Footer from '../components/footer/Footer.js'
import './RouteDefaultContainer.css';

const RouteDefaultContainer = ({ component, match }) =>
	<Route
		match={match}
		render={props => {
			return (
				<div className="default-container">
					<Burger />
					<div className="site-content">
						{React.createElement(component)}
					</div>
				</div>
			);
		}}
	/>;

export default RouteDefaultContainer;
