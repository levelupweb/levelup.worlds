import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SwitchCSSTransitionGroup from 'switch-css-transition-group'
import { withRouter } from 'react-router'

// components
import Index from './js/pages/index/Index.js'
import PageContainer from './js/containers/PageContainer.js';
import NoMatch from './js/components/noMatch/NoMatch.js';

class App extends Component {
	render() {
		return (
			<div className="App">
				<SwitchCSSTransitionGroup
					location={this.props.location}
          transitionName="fade"
          transitionEnterTimeout={600}
          transitionLeaveTimeout={600}>
		      <Route exact path="/" component={Index} />
		      <Route path="/page" component={PageContainer} />
		      <Route component={NoMatch} />
		    </SwitchCSSTransitionGroup>
		  </div>
		)
	}
}

// доступ к параметрам роутера в App
export default withRouter(App)