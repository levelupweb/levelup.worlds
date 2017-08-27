import React, { Component } from 'react';
import Socials from '../socials/Socials.js'
import './footer.css'

export default class Footer extends Component {
	render() {
		if(!this.props.page) {
			return (
				<div className="footer">
					<div className="footer-wrapper">
						<p className="spacing">Создано с любовью в Levelup Web</p>
					</div>
				</div>
			);
		} else {
			return (
				<div className="block">
					<div className="footer onPage">
						<div className="footer-wrapper">
							<div className="left">
								Создано в <a href="http://web.levelupworlds.com">Levelup Web</a> с любовью
							</div>
							<div className="right">
								<Socials />
							</div>
						</div>
					</div>
				</div>
			)
		}
	}
}

