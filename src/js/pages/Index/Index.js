import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import DefaultContainer from '../../containers/DefaultContainer.js'
import Socials from '../../components/Socials/Socials.js'
import Typed from 'typed.js'
import ScrollReveal from 'scrollreveal'
import './index.css'

class Index extends Component {
	componentDidMount() {
		prepareIndexPage();
	}

	scrollToProjects = () => {
		document.querySelector('.Projects').scrollIntoView({ 
		  behavior: 'smooth' 
		});
	}

	render() {
		return (
			<DefaultContainer>
				<div className="Index Container fullpage">
					<div className="Container-inner">
						<div className="Jumbotron">
							<Socials classNames="center" visible={false} />
							<div className="logotype">
								<img src="img/logo-default.png" width="55px" alt="Levelup Worlds" />
								<h1>Levelup Worlds</h1>
							</div>
							<div id="description">
						    <p>Привет!</p>
						    <p>Мы - это digital-агентство полного цикла. Наша <Link to="/page/team">команда</Link> разрабатывает эффективные продукты, которые помогают вашему бизнесу.</p>
							</div>
							<p className="primary typed-text"></p>
							<div className="Jumbotron-actions">
								<span onClick={this.scrollToProjects} className="button">Наши проекты <i className="fa fa-angle-double-down" aria-hidden="true"></i></span>
							</div>
						</div>
					</div>
				</div>
				<div className="Container Projects fullpage">
					<div className="Container-inner">
						<h1>Проекты</h1>
						<p className="primary">Наша команда работает над каждым проектом, вкладывая в это самих себя. Мы придумываем и реализуем проекты, которые помогают людям. </p>
						<div className="projects">
							<div className="project">
								<div className="image">
									<a href="http://levelup.name/" target="_blank">
										<img src="img/logo-name.png" width="64px" alt="Levelup Name" />
									</a>
								</div>
								<div className="title">
									<span className="spacing"><a href="http://levelup.name/" target="_blank">Name</a></span>
								</div>
							</div>
							<div className="project">
								<div className="image">
									<a href="http://web.levelupworlds.com/" target="_blank">
										<img src="img/logo-web.png" width="64px" alt="Levelup Web" />
									</a>
								</div>
								<div className="title">
									<span className="spacing"><a href="http://web.levelupworlds.com" target="_blank">
										Web
									</a></span>
								</div>
							</div>
							<div className="project">
								<div className="image">
									<a href="http://levelupmag.com/" target="_blank">
										<img src="img/logo-magazine.png" width="64px" alt="Levelup Magazine" />
									</a>
								</div>
								<div className="title">
									<span className="spacing"><a href="http://levelupmag.com/" target="_blank">
										Magazine
									</a></span>
								</div>
							</div>
							<div className="project">
								<div className="image">
									<a href="http://levelupmusic.com/" target="_blank">
										<img src="img/logo-music.png" width="64px" alt="Levelup Music" />
									</a>
								</div>
								<div className="title">
									<span className="spacing"><a href="http://levelupmusic.com/" target="_blank">
										Music
									</a></span>
								</div>
							</div>
							<div className="project">
								<div className="image">
									<a href="http://smm.levelupworlds.com/" target="_blank">
										<img src="img/logo-promo.png" width="64px" alt="Levelup Promo" />
									</a>
								</div>
								<div className="title">
									<span className="spacing"><a href="http://smm.levelupworlds.com/" target="_blank">
										Promo
									</a></span>
								</div>
							</div>
							<div className="project">
								<div className="image">
									<a href="http://film.levelupworlds.com/" target="_blank">
										<img src="img/logo-film.png" width="64px" alt="Levelup Promo" />
									</a>
								</div>
								<div className="title">
									<span className="spacing"><a href="http://film.levelupworlds.com/" target="_blank">
										Film
									</a></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</DefaultContainer>
		);
	}
}

const prepareIndexPage = () => {
	var sr = ScrollReveal();
	new Typed('.typed-text', {
	  stringsElement: '#description',
	  typeSpeed: 15,
	  showCursor: false,
	  onComplete() {
	  	document.querySelector('.socials').classList.add('visible')
	  }
	});

	sr.reveal('.Jumbotron .logotype', { duration: 500, delay: 1000, origin: 'top' });
	sr.reveal('.Jumbotron .Jumbotron-actions', { duration: 500, delay: 5500, origin: 'bottom' });
	sr.reveal('.Default .Footer', { duration: 500, origin: 'bottom', delay: 5500 }, 100)
	sr.reveal('.Default .Header', { duration: 500, origin: 'top', delay: 5000 }, 100)
	sr.reveal('.projects .project', { duration: 500, origin: 'bottom', delay: 0 }, 200)
}

export default Index;