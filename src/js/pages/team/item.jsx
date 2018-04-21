import React, { Component } from 'react';
import "../../components/socials/styles.css";
import "./styles.css"

export default class Item extends Component {
	renderSocials(socials) {
		return socials.map((item, i) => {
			const { link, title } = item;
			return <a className="social" key={i} href={link} target="_blank">
				<li><i className={`fa fa-${title}`} href={link}></i>
			</li></a>
		})
	}
	revealSocials(e) {
		this.socials.classList.add('visible');
		e.target.classList.add('hidden');
	}
	render() {
		const { name, description, socials, image } = this.props.user;
		return (
			<div className="item user">
				<img src={image} className="image" alt={name} />
				<div className="content">
					<div className="name"><h3>{name}</h3></div>
					<div className="description">{description}</div>
					<div className="button small" onClick={(e) => {this.revealSocials(e)}}>Follow</div>
					<ul className="socials center" ref={(e) => {this.socials = e}}>
				    {this.renderSocials(socials)}
					</ul>
				</div>
			</div>
		);
	}
}
