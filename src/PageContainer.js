import React, { Component } from 'react';
import Header from './Header/Header.js'
import Footer from './Footer/Footer.js'
import { Route, withRouter } from 'react-router-dom';
import SwitchCSSTransitionGroup from 'switch-css-transition-group'
import './pageContainer.css'

import Partner from './Partner/Partner.js' 
import Team from './Team/Team.js'
import Index from './Index/Index.js'
import Hiring from './Hiring/Hiring.js'
import About from './About/About.js'

class PageContainer extends Component {
	componentDidMount() {
		setFooter();
	}
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
					      <Route path="/page/hiring" component={Hiring} />
					      <Route path="/page/team" component={Team} />
				    </SwitchCSSTransitionGroup>
					</div>
				</div>
				<Footer fixed={false} />
			</div>
		);
	}
}

function setFooter() {
	const viewportHeight = window.innerHeight;
	const contentHeight = document.querySelector('.Page .Wrapper').offsetHeight;
	const headerHeight = document.querySelector('.Header-static').offsetHeight;
	if(viewportHeight > (contentHeight + headerHeight)) {
		document.querySelector('.Footer').classList.remove('static')
	}
}

export default withRouter(PageContainer)
