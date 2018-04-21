import React, { Component } from "react";
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import "./styles.css";
import Projects from './projects';
import Jumbotron from './jumbotron';
import Logo from './logo';


class Index extends Component {
	constructor(props) {
		super(props);
		this.changeSection = this.changeSection.bind(this);
		this.renderCurrentSection = this.renderCurrentSection.bind(this);
		this.state = { currentSection: 'logo' }
	}
	componentDidMount() {
		setTimeout(() => {
			this.changeSection('jumbotron')
		}, 1500)
	}
	renderCurrentSection(currentSection) {
		switch (currentSection) {
			case 'logo': 
			return <Logo size={55} key={1} />
			case 'jumbotron':
			return <Jumbotron changeSection={this.changeSection} key={2} />
			case 'projects':
			return <Projects changeSection={this.changeSection} key={3} />
		}
	}
	changeSection(currentSection) {
		this.setState({
			currentSection
		})
	}
	render() {
		const { currentSection } = this.state;
		return (
			<div>
				<section className="fullpage center blocks" style={{borderBottom:0}}>
					<div className="container text">
						<div className="block">
							<ReactCSSTransitionReplace 
							 	transitionName="fade-wait" 
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={1000}>
      				{this.renderCurrentSection(currentSection)}
      				</ReactCSSTransitionReplace>
						</div>
					</div>
				</section>
			</div>
		);
	}
}


export default Index;