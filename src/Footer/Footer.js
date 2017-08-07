import React, { Component } from 'react';
import './footer.css'

export default class Footer extends Component {
	render() {
		return (
			<div className="Footer">
				<div className="Footer-Wrapper">
					<p className="spacing">Создано с <img src="img/like.png" width="16px" /></p>
				</div>
			</div>
		);
	}
}
