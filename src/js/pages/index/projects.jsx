import React from 'react';
import config from '../../utils/config'
import { Link } from 'react-router-dom'

const Projects = props =>
	<div className="Proj">
		<div className="projects block" style={{paddingBottom: 0, paddingTop:0}}>
			<div className="project">
				<div className="image">
					<a href="http://levelup.name/" target="_blank">
						<img
							src={config.static + '/img/logo-name.png'}
							width="64px"
							alt="Levelup Name"
						/>
					</a>
				</div>
				<div className="title">
					<span className="spacing">
						<a href="http://levelup.name/" target="_blank">
							Name
						</a>
					</span>
					<p>Блог-платформа</p>
				</div>
			</div>
			<div className="project">
				<div className="image">
					<a href="http://web.levelupworlds.com/" target="_blank">
						<img
							src={config.static + '/img/logo-web.png'}
							width="64px"
							alt="Levelup Web"
						/>
					</a>
				</div>
				<div className="title">
					<span className="spacing">
						<a href="http://web.levelupworlds.com" target="_blank">
							Web
						</a>
					</span>
					<p>Веб-студия</p>
				</div>
			</div>
			<div className="project">
				<div className="image">
					<a href="http://levelupmag.com/" target="_blank">
						<img
							src={config.static + '/img/logo-magazine.png'}
							width="64px"
							alt="Levelup Magazine"
						/>
					</a>
				</div>
				<div className="title">
					<span className="spacing">
						<a href="http://levelupmag.com/" target="_blank">
							Magazine
						</a>
					</span>
					<p>Мотивационный журнал</p>
				</div>
			</div>
			<div className="project">
				<div className="image">
					<a href="http://music.levelupworlds.com/" target="_blank">
						<img
							src={config.static + '/img/logo-music.png'}
							width="64px"
							alt="Levelup Music"
						/>
					</a>
				</div>
				<div className="title">
					<span className="spacing">
						<a href="http://music.levelupworlds.com/" target="_blank">
							Music
						</a>
					</span>
					<p>Музыкальный лейбл</p>
				</div>
			</div>
			<div className="project">
				<div className="image">
					<a href="http://smm.levelupworlds.com/" target="_blank">
						<img
							src={config.static + '/img/logo-promo.png'}
							width="64px"
							alt="Levelup Promo"
						/>
					</a>
				</div>
				<div className="title">
					<span className="spacing">
						<a href="http://smm.levelupworlds.com/" target="_blank">
							SMM
						</a>
					</span>
					<p>Продвижение в сетях</p>
				</div>
			</div>
			<div className="project">
				<div className="image">
					<a href="http://film.levelupworlds.com/" target="_blank">
						<img
							src={config.static + '/img/logo-film.png'}
							width="64px"
							alt="Levelup Promo"
						/>
					</a>
				</div>
				<div className="title">
					<span className="spacing">
						<a href="http://film.levelupworlds.com/" target="_blank">
							Film
						</a>
					</span>
					<p>Киностудия</p>
				</div>
			</div>
		</div>
		<div className="block" style={{paddingTop: 0}}>
			<div className="center">
				<div className="button-group" style={{justifyContent: 'center'}}>
					<button onClick={() => {props.changeSection('jumbotron')}} className="button">
						Назад
					</button>
					<Link to="/contact">
						<button className="button">
							Сотрудничество
						</button>
					</Link>
				</div>
			</div>
		</div>
	</div>

export default Projects