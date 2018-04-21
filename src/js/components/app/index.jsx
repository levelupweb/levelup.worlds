import React from "react";
import SwitchCSSTransitionGroup from "switch-css-transition-group";
import { withRouter } from "react-router";
import Index from "../../pages/index";
import About from "../../pages/about"; 
import Career from "../../pages/career";
import Contact from "../../pages/contact"; 
import Partner from "../../pages/partner";
import Team from "../../pages/team"; 
import notFound from "../../pages/notFound";
import RouteDefaultContainer from "../../containers/RouteDefaultContainer";
import RoutePageContainer from "../../containers/RoutePageContainer";
 
const App = props => {
	const { location } = props;
	return (
		<div className="App">
			<SwitchCSSTransitionGroup
				location={location}
				transitionName="fade"
				transitionEnterTimeout={600}
				transitionLeaveTimeout={600}
			>
				<RouteDefaultContainer exact path="/" component={Index} />
				<RoutePageContainer path="/about" component={About} />
				<RoutePageContainer path="/team" component={Team} />
				<RoutePageContainer path="/contact" component={Contact} />
				<RoutePageContainer path="/partner" component={Partner} />
				<RoutePageContainer path="/career" component={Career} />
				<RouteDefaultContainer component={notFound} />
			</SwitchCSSTransitionGroup>
		</div> 
	);
};

export default withRouter(App);
