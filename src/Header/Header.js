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
							<Link to="/page/contact" onClick={() => {this.revealNavigation()}}><li>Контакты</li></Link>
							<Link to="/page/projects" onClick={() => {this.revealNavigation()}}><li>Проекты</li></Link>
						</ul>
					</nav>
				</div>
			);
		} else {
			return (
				<div className="Container Header-static">
					<nav className="navigation horizontal">
						<ul>
							<Link to="/page/projects"><li>Проекты</li></Link>
							<Link to="/page/about"><li>О нас</li></Link>
							<Link to="/page/partner"><li>Партнерам</li></Link>
							<Link to="/page/career"><li>Карьера</li></Link>
							<Link to="/page/team"><li>Команда</li></Link>
							<Link to="/page/contact"><li>Контакты</li></Link>
						</ul>
					</nav>
				</div>
			)
		}
	}
}
