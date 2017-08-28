import React, { Component } from 'react';
import Item from './Item.js'
import { Link } from 'react-router-dom'
import users from './userlist.js'
import { Helmet } from 'react-helmet'
import './team.css'

export default class Team extends Component {
	renderUsers(users) {
		return users.map((user, i) => {
			return <Item user={user} key={i} />
		})
	}
	render() {
		return (
			<div className="page-team page">
				<Helmet>
      		<title>Команда - Levelup Worlds</title>
      		<meta name="description" content="Наша команда Levelup Worlds. Digital-студия полного цикла" />
  			</Helmet>
				<div className="">
					<div className="block">
						<div className="block-title left" id="prices">
							<h5 className="super title">
								Наша команда
							</h5>
							<p className="description">Те, кто трудятся над проектами Levelup</p>
						</div>
					</div>
					<div className="block">
						<p className="primary">
							Над экосистемой Levelup трудятся десятки специалистов, но кто стоит за 
							руководством каждого из проектов? Как говорится, Meet our team!
						</p>
					</div>
					<div className="block">
						<div className="team">
							{this.renderUsers(users)}
						</div>
					</div>
					<div className="block">
						<h2>Хотите стать частью команды?</h2>
						<p className="primary">Наша команда находится в постоянном поиске инициативных личностей. </p>
					</div>
					<div className="block">	
						<p className="primary">
							Предпочитаете
							больше работу, нежели отдых? Умеете найти общий язык с коллегами и проникнуться идеей 
							команды? Возможно, наша команда ищет именно вас!
						</p>
					</div>
					<div className="block">
						<div className="button-group"><Link to="/career" className="button">Вакансии</Link></div>
					</div>
				</div>
			</div>
		);
	}
}
