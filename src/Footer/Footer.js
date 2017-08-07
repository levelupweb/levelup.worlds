import React, { Component } from 'react';
import './footer.css'

export default class Footer extends Component {
	render() {
		return (
			<div className="Footer">
				<div className="Footer-Wrapper">
					<strong>Наши проекты: </strong> 
					<ul className="List projects">
						<a href="#"><li>NAME</li></a>
						<a href="#"><li>SMM</li></a>
						<a href="#"><li>WEB</li></a>
						<a href="#"><li>FILM</li></a>
						<a href="#"><li>MONTEMILLI</li></a>
						<a href="#"><li>MAG</li></a>
					</ul>
				</div>
			</div>
		);
	}
}
