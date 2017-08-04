import React, { Component } from 'react';
import Header from './Header/Header.js'
import Footer from './Footer/Footer.js'
import './defaultContainer.css'

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
				<Footer fixed={true} />
			</div>
		);
	}
}
