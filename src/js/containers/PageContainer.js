import React, { Component } from 'react';
import Header from '../components/header/Header.js'
import { Route, withRouter } from 'react-router-dom';
import SwitchCSSTransitionGroup from 'switch-css-transition-group';
import NoMatch from '../components/noMatch/NoMatch.js';

import Partner from '../pages/partner/Partner.js';
import Team from '../pages/team/Team.js'
import Career from '../pages/career/Career.js'
import About from '../pages/about/About.js'
import Contact from '../pages/contact/Contact.js'

class PageContainer extends Component {
	render() {
		return (
			<div className="Page">
				<div className="Container">
					<div className="Container-Inner" style={{paddingTop:20+'px'}}>
						<Header burger={false} />
					</div>
				</div>
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
