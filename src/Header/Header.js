import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './header.css'

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			revealed: false
		}
	}

	revealNavigation() {
		document.querySelector('body .Container').classList.toggle('with-menu')
		this.setState({
			revealed: !this.state.revealed
		})
	}

	render() {
		const { burger } = this.props;
		const { revealed } = this.state
		if(burger) {
			return (
				<div className="Header">
					<p className="spacing revealer" onClick={() => {this.revealNavigation()}}>
						{(revealed) ? 'Закрыть меню' : 'Открыть меню'}
					</p>
					<nav className={(revealed) ? 'navigation revealed' : 'navigation'}>
						<ul>
							<Link to="/" onClick={() => {this.revealNavigation()}}><li>Главная</li></Link>
							<Link to="/page/about" onClick={() => {this.revealNavigation()}}><li>О нас</li></Link>
							<Link to="/page/partner" onClick={() => {this.revealNavigation()}}><li>Партнерам</li></Link>
							<Link to="/page/career" onClick={() => {this.revealNavigation()}}><li>Карьера</li></Link>
							<Link to="/page/team" onClick={() => {this.revealNavigation()}}><li>Команда</li></Link>
						</ul>
					</nav>
				</div>
			);
		} else {
			return (
				<div className="Container Header-static">
					<ul className="socials List visible">
				    <a href="#"><li><i className="fa fa-twitter" href="#"></i></li></a>
				    <a href="#"><li><i className="fa fa-facebook" href="#"></i></li></a>
				    <a href="#"><li><i className="fa fa-vk" href="#"></i></li></a>
				    <a href="#"><li><i className="fa fa-instagram" href="#"></i></li></a>
					</ul>
					<nav className="navigation horizontal">
						<ul>
							<Link to="/"><li>Главная</li></Link>
							<Link to="/page/about"><li>О нас</li></Link>
							<Link to="/page/partner"><li>Партнерам</li></Link>
							<Link to="/page/career"><li><b className="primary">Карьера</b></li></Link>
							<Link to="/page/team"><li>Команда</li></Link>
						</ul>
					</nav>
				</div>
			)
		}
	}
}
