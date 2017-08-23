import React, { Component } from 'react';
import Footer from '../components/footer/Footer.js'
import Burger from '../components/burger/Burger.js'

export default class DefaultContainer extends Component {
	render() {
		const { children } = this.props
		return (
			<div className="Default">
				<Burger />
				<div className="Wrapper">
					<div className="Inner">
						{children}
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
