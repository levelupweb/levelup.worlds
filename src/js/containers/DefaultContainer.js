import React, { Component } from 'react';
import Header from '../components/Header/Header.js'
import Footer from '../components/Footer/Footer.js'

export default class DefaultContainer extends Component {
	render() {
		const { children } = this.props
		return (
			<div className="Default">
				<Header burger={true} />
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
