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
							<Link to="/about" onClick={() => {this.revealNavigation()}}><li>О нас</li></Link>
							<Link to="/partner" onClick={() => {this.revealNavigation()}}><li>Партнерам</li></Link>
							<Link to="/hiring" onClick={() => {this.revealNavigation()}}><li>Вакансии</li></Link>
							<Link to="/team" onClick={() => {this.revealNavigation()}}><li>Команда</li></Link>
						</ul>
					</nav>
				</div>
			);
		} else {
			return (
				<div className="Container">
					<nav className="navigation horizontal">
						<ul>
							<Link to="/"><li>Главная</li></Link>
							<Link to="/about"><li>О нас</li></Link>
							<Link to="/partner"><li>Партнерам</li></Link>
							<Link to="/hiring"><li><b className="primary">Вакансии</b></li></Link>
							<Link to="/team"><li>Команда</li></Link>
						</ul>
					</nav>
				</div>
			)
		}
	}
}
