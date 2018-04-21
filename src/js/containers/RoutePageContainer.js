import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import Footer from "../components/footer"
import Header from "../components/header";
import { NotificationContainer } from 'react-notifications';
import './routePageContainer.css';

const RoutePageContainer = ({ component }) =>
	<Route
		render={props => {
			return (
				<div className="page-container">
					<NotificationContainer />
					<div className="site-content">
						<div className="container text blocks">
							<Header />
							{React.createElement(component)}
							<Footer page={true} />
						</div>
					</div>
				</div>
			);
		}}
	/>;

RoutePageContainer.propTypes = {
	component: PropTypes.func
}

export default RoutePageContainer;
