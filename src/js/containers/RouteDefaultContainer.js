import React from "react";
import { Route } from "react-router-dom";
import propTypes from "prop-types";
import Burger from '../components/burger/Burger.js';
import Footer from '../components/footer/Footer.js'
import { NotificationContainer } from 'react-notifications';
import './routeDefaultContainer.css';

const RouteDefaultContainer = ({ component, match }) =>
	<Route
		match={match}
		render={props => {
			return (
				<div className="default-container">
					<NotificationContainer />
					<Burger />
					<div className="site-content">
						{React.createElement(component)}
					</div>
					<Footer />
				</div>
			);
		}}
	/>;

export default RouteDefaultContainer;
