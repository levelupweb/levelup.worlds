import React, { Component } from 'react';
import Item from './Item.js'
import { Link } from 'react-router-dom'
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
				<p className="primary">Над экосистемой Levelup трудятся десятки специалистов, но кто стоит за 
				руководством каждого из проектов? Как говорится, Meet our team!</p>
				<div className="team">
					{this.renderUsers(users)}
				</div>
				<h2>Хотите стать частью команды?</h2>
				<p className="primary">Наша команда находится в постоянном поиске инициативных личностей. </p>
				<p className="primary">Предпочитаете
				больше работу, нежели отдых? Умеете найти общий язык с коллегами и проникнуться идеей 
				команды? Возможно, наша команда ищет именно вас!</p>
				<br />
				<br />
				<Link to="/page/career" className="button">Вакансии</Link>
			</div>
		);
	}
}
