import React, { Component } from 'react';
import Header from './Header/Header.js'
import Footer from './Footer/Footer.js'
import { Route, withRouter } from 'react-router-dom';
import SwitchCSSTransitionGroup from 'switch-css-transition-group'

import Partner from './Partner/Partner.js' 
import Team from './Team/Team.js'
import Index from './Index/Index.js'
import Career from './Career/Career.js'
import About from './About/About.js'
import Contact from './Contact/Contact.js'
import Projects from './Projects/Projects.js'

class PageContainer extends Component {
	render() {
		return (
			<div className="Page">
				<Header burger={false} />
				<div className="Wrapper" ref={(e) => {this.wrapper = e}}>
					<div className="Inner">
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
					      <Route path="/page/projects" component={Projects} />
				    </SwitchCSSTransitionGroup>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(PageContainer)
