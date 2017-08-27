import React from "react";
import SwitchCSSTransitionGroup from "switch-css-transition-group";
import { withRouter } from "react-router";

// components
import Index from "../../pages/index/index.js";
import About from "../../pages/about/About.js";
import Career from "../../pages/career/Career.js";
import Contact from "../../pages/contact/Contact.js";
import Partner from "../../pages/partner/Partner.js";
import Team from "../../pages/team/Team.js";
import notFound from "../../pages/notFound/notFound.js";
import RouteDefaultContainer from "../../containers/RouteDefaultContainer.js";
import RoutePageContainer from "../../containers/RoutePageContainer.js";

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
