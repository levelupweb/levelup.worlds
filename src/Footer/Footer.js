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
						<p className="spacing">Создано с <img alt="Сердце" src="./img/like.png" width="16px" height="16px" /></p>
					}
				</div>
			</div>
		);
	}
}
