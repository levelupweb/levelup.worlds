import React, { Component } from 'react';
import Header from './Header/Header.js'
import Footer from './Footer/Footer.js'
import './pageContainer.css'

export default class PageContainer extends Component {
	render() {
		const { children } = this.props
		return (
			<div className="Page">
				<Header burger={false} />
				<div className="Wrapper">
					<div className="Inner">
						{children}
					</div>
				</div>
				<Footer fixed={false} />
			</div>
		);
	}
}
