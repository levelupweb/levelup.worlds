import React, { Component } from 'react';
import Header from '../components/Header/Header.js'
import { Route, withRouter } from 'react-router-dom';
import SwitchCSSTransitionGroup from 'switch-css-transition-group';
import NoMatch from '../components/NoMatch/NoMatch.js';

import Partner from '../pages/Partner/Partner.js';
import Team from '../pages/Team/Team.js'
import Career from '../pages/Career/Career.js'
import About from '../pages/About/About.js'
import Contact from '../pages/Contact/Contact.js'

class PageContainer extends Component {
	render() {
		return (
			<div className="Page">
				<Header burger={false} />
				<SwitchCSSTransitionGroup
					location={this.props.location}
          transitionName="fade"
          transitionEnterTimeout={600}
          transitionLeaveTimeout={600}>
						<Route path="/page/about" component={About} />
			      <Route path="/page/partner" component={Partner} />
			      <Route path="/page/career" component={Career} />
			      <Route path="/page/team" component={Team} />
			      <Route path="/page/contact" component={Contact} />
			      <Route component={NoMatch} />
		    </SwitchCSSTransitionGroup>
			</div>
		);
	}
}

export default withRouter(PageContainer)
