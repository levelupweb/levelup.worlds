import React, { Component } from 'react';

class Projects extends Component {
	render() {
		return (
			<div className="Projects Container">
				<h1>Наши проекты</h1>
				<p className="primary">Проекты, созданные в Levelup. Здесь вы найдёте всё, что вам необходимо: от копирайтинга до разработки мобильных приложений</p>
				<div className="statistic">
					<div className="item">
						<div className="number">
							<img src="img/layers.png" width="64px" alt="Веб-разработка" />
						</div>
						<div className="title">
							<a href="http://web.levelupworlds.com" target="_blank">Web</a>
						</div>
						<div className="description">
							Приложения
						</div>
					</div>
					<div className="item">
						<div className="number">
							<img src="img/film-strip.png" width="64px" alt="Видео и фото" />
						</div>
						<div className="title">
							<a href="http://film.levelupworlds.com" target="_blank">Film</a>
						</div>
						<div className="description">
							Фото и видео
						</div>
					</div>
					<div className="item">
						<div className="number">
							<img src="img/user.png" width="64px" alt="Levelup Name" />
						</div>
						<div className="title">
							<a href="http://levelup.name" target="_blank">Name</a>
						</div>
						<div className="description">
							Платформа
						</div>
					</div>
					<div className="item">
						<div className="number">
							<img src="img/diamond.png" width="64px" alt="Montemilli" />
						</div>
						<div className="title">
							<a href="http://montemilli.com" target="_blank">Montemilli</a>
						</div>
						<div className="description">
							Ювелирные изделия
						</div>
					</div>
					<div className="item">
						<div className="number">
							<img src="img/megaphone.png" width="64px" alt="SMM & SEO" />
						</div>
						<div className="title">
							<a href="http://smm.levelupworlds.com" target="_blank">SMM & SEO</a>
						</div>
						<div className="description">
							Продвижение
						</div>
					</div>
					<div className="item">
						<div className="number">
							<img src="img/newspaper.png" width="64px" alt="Levelup Mag" />
						</div>
						<div className="title">
							<a href="http://levelupmag.com" target="_blank">Mag</a>
						</div>
						<div className="description">
							Журнал
						</div>
					</div>
				</div>
				<p className="primary">To Be Continued....</p>
			</div>
		);
	}
}

export default Projects;