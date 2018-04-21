import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const blurSiteContent = (selector) => {
	document.querySelector(selector)
	.classList.toggle('with-menu');
}

class Burger extends Component {
	constructor(props) {
		super(props);
		this.state = {
			revealed: false
		};
	}

	revealNavigation() {
		this.setState({
			revealed: !this.state.revealed
		}, blurSiteContent('.site-content'));
	}

	render() {
		const { revealed } = this.state;
		return (
			<div className="burger">
				<div className="burger-revealer"
					onClick={() => { this.revealNavigation() }}>
					<div id="hamburger" className={!revealed ? "hamburglar is-closed" : "is-open hamburglar"}>
    				<div className="burger-icon">
    				  <div className="burger-container">
    				    <span className="burger-bun-top"></span>
    				    <span className="burger-filling"></span>
    				    <span className="burger-bun-bot"></span>
    				  </div>
    				</div>
 						<svg width="0" height="0">
    				   <mask id="mask">
    							<path xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ff0000" strokeMiterlimit="10" strokeWidth="4" d="M 34 2 c 11.6 0 21.8 6.2 27.4 15.5 c 2.9 4.8 5 16.5 -9.4 16.5 h -4" />
    				   </mask>
    				 </svg>
  				</div>
				</div>
				<nav className={revealed ? "navigation revealed" : "navigation"}>
					<ul>
						<Link
							to="/about"
							onClick={() => {
								this.revealNavigation();
							}} >
							<li>О нас</li>
						</Link>
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