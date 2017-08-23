import React, { Component } from 'react';
import Header from '../components/header/Header.js'
import { Route, withRouter } from 'react-router-dom';
import SwitchCSSTransitionGroup from 'switch-css-transition-group';
import NoMatch from '../components/noMatch/NoMatch.js';
import Footer from '../components/footer/Footer.js';

import Partner from '../pages/partner/Partner.js';
import Team from '../pages/team/Team.js'
import Career from '../pages/career/Career.js'
import About from '../pages/about/About.js'
import Contact from '../pages/contact/Contact.js'

class PageContainer extends Component {
	render() {
		return (
			<div className="page-container">
				<div className="site-content">
					<div className="container text blocks">
						<Header />
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
						<Footer page={true} />
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(PageContainer)
