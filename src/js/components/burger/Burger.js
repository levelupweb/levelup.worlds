import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./burger.css";

class Burger extends Component {
	constructor(props) {
		super(props);
		this.state = {
			revealed: false
		};
	}

	revealNavigation() {
		if (!this.props.visible) {
		  document.querySelector(".site-content").classList.toggle("with-menu");
		} 
		
		this.setState({
			revealed: !this.state.revealed
		});
	}

	render() {
		const { revealed } = this.state;
		return (
			<div className="burger">
				<p className="burger-revealer spacing"
					onClick={() => { this.revealNavigation() }}>
					{revealed ? "Закрыть меню" : "Открыть меню"}
				</p>
				<nav className={revealed ? "navigation revealed" : "navigation"}>
					<ul>
						{/*<Link
							to="/page/about"
							onClick={() => {
								this.revealNavigation();
							}} >
							<li>О нас</li>
						</Link>*/}
						<Link
							to="/partner"
							onClick={() => {
								this.revealNavigation();
							}} >
							<li>Партнерам</li>
						</Link>
						<Link
							to="/partner"
							onClick={() => {
								this.revealNavigation();
							}} >
							<li>Карьера</li>
						</Link>
						<Link
							to="/team"
							onClick={() => {
								this.revealNavigation();
							}} >
							<li>Команда</li>
						</Link>
						<Link
							to="/contact"
							onClick={() => {
								this.revealNavigation();
							}} >
							<li>Контакты</li>
						</Link>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Burger;