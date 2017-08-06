import React, { Component } from 'react';
import './footer.css'

export default class Footer extends Component {
	render() {
		const { fixed } = this.props
		return (
			<div className={(fixed) ? 'Footer' : 'Footer static'}>
				<div className="Footer-Wrapper">
					{(!fixed) &&
						<ul className="socials List visible">
					    <a href="#"><li><i className="fa fa-twitter" href="#"></i></li></a>
					    <a href="#"><li><i className="fa fa-facebook" href="#"></i></li></a>
					    <a href="#"><li><i className="fa fa-vk" href="#"></i></li></a>
					    <a href="#"><li><i className="fa fa-instagram" href="#"></i></li></a>
						</ul>
					}
					{(fixed) && 
						<div>
							<ul className="List projects">
								<a href="#"><li>NAME</li></a>
								<a href="#"><li>SMM</li></a>
								<a href="#"><li>WEB</li></a>
								<a href="#"><li>FILM</li></a>
								<a href="#"><li>MONTEMILLI</li></a>
								<a href="#"><li>MAG</li></a>
							</ul>
							<br />
							<ul className="socials List">
						    <a href="#"><li><i className="fa fa-twitter" href="#"></i></li></a>
						    <a href="#"><li><i className="fa fa-facebook" href="#"></i></li></a>
						    <a href="#"><li><i className="fa fa-vk" href="#"></i></li></a>
						    <a href="#"><li><i className="fa fa-instagram" href="#"></i></li></a>
							</ul>
						</div>
					}
				</div>
			</div>
		);
	}
}
