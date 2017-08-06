import React, { Component } from 'react';
import Item from './Item.js'
import users from './userlist.js'
import './team.css'

export default class Team extends Component {
	revealSocials = (e) => {

	}
	renderUsers(users) {
		return users.map((user, i) => {
			return <Item user={user} key={i} />
		})
	}
	render() {
		return (
			<div className="Team Container">
				<h1>Команда <small>кто создаёт экосистему Levelup?</small></h1>
				<p>Над экосистемой Levelup трудятся десятки специалистов, но кто стоит за 
				руководством каждого из проектов? Как говорится, Meet our team!</p>
				<div className="team">
					{this.renderUsers(users)}
				</div>
			</div>
		);
	}
}
