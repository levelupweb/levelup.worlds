import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SwitchCSSTransitionGroup from 'switch-css-transition-group'
import { withRouter } from 'react-router'

// components
import About from './About/About.js'
import Partner from './Partner/Partner.js'
import Index from './Index/Index.js'
import Hiring from './Hiring/Hiring.js'

class App extends Component {
	render() {
		return (
			<div>
				<SwitchCSSTransitionGroup
					location={this.props.location}
          transitionName="fade"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
		      <Route exact path="/" component={Index} />
		      <Route path="/about" component={About} />
		      <Route path="/partner" component={Partner} />
		      <Route path="/hiring" component={Hiring} />
		    </SwitchCSSTransitionGroup>
		  </div>
		)
	}
}

// доступ к параметрам роутера в App
export default withRouter(App)