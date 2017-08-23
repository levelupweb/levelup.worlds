import React, { Component } from "react";
// import { Link } from "react-router-dom";
import DefaultContainer from "../../containers/DefaultContainer.js";
import Socials from "../../components/socials/Socials.js";
import Typed from "typed.js";
import ScrollReveal from "scrollreveal";
import "./index.css";


const prepareIndexPage = () => {
	var sr = ScrollReveal();
	new Typed(".typed-text", {
		stringsElement: "#description",
		typeSpeed: 15,
		showCursor: false,
		onComplete() {
			document.querySelector(".socials").classList.add("visible");
		}
	});

	sr.reveal(".Jumbotron .logotype", {
		duration: 500,
		delay: 1000,
		origin: "top"
	});
	sr.reveal(".Jumbotron .Jumbotron-actions", {
		duration: 500,
		delay: 5500,
		origin: "bottom"
	});
	sr.reveal(
		".Default .Footer",
		{ duration: 500, origin: "bottom", delay: 5500 },
		100
	);
	sr.reveal(
		".Default .Header",
		{ duration: 500, origin: "top", delay: 5000 },
		100
	);
};

class Index extends Component {
	componentDidMount() {
		prepareIndexPage();
	}

	revealProjects = () => {
		this.jumbotron.classList.add("hidden");
		this.projects.classList.add("visible");
	};

	revealJumbotron = () => {
		this.jumbotron.classList.remove("hidden");
		this.projects.classList.remove("visible");
	};

	render() {
		return (
			<DefaultContainer>
				<section className="fullpage center blocks">
					<div className="container text">
						<div className="block">
						<div
							className="Jumbotron"
							ref={e => {
								this.jumbotron = e;
							}}
						>
							<Socials classNames="center" visible={false} />
							<div className="logotype">
								<img
									src="img/logo-default.png"
									width="55px"
									alt="Levelup Worlds"
								/>
								<h1>Levelup Worlds</h1>
							</div>
							<div id="description">
								<p>Привет!</p>
								<p>
									Мы создаём молодой и дерзкий бренд, объединяющий в себе социальные, бизнес и медиа проекты, помогающие бизнесу и людям.
								</p>
							</div>
							<p className="primary typed-text" />
							<div className="Jumbotron-actions">
								<span onClick={this.revealProjects} className="button">
									Наши проекты{" "}
									<i className="fa fa-angle-double-down" aria-hidden="true" />
								</span>
							</div>
						</div>
						</div>
						<div className="block">
						<div
							className="Proj"
							ref={e => {
								this.projects = e;
							}}
						>
							<div className="projects">
								<div className="project">
									<div className="image">
										<a href="http://levelup.name/" target="_blank">
											<img
												src="img/logo-name.png"
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
										<p>Современная блог-платформа</p>
									</div>
								</div>
								<div className="project">
									<div className="image">
										<a href="http://web.levelupworlds.com/" target="_blank">
											<img
												src="img/logo-web.png"
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
										<p>Веб-разработка и веб-технологии</p>
									</div>
								</div>
								<div className="project">
									<div className="image">
										<a href="http://levelupmag.com/" target="_blank">
											<img
												src="img/logo-magazine.png"
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
										<p>Журнал о людях и их жизни</p>
									</div>
								</div>
								<div className="project">
									<div className="image">
										<a href="http://levelupmusic.com/" target="_blank">
											<img
												src="img/logo-music.png"
												width="64px"
												alt="Levelup Music"
											/>
										</a>
									</div>
									<div className="title">
										<span className="spacing">
											<a href="http://levelupmusic.com/" target="_blank">
												Music
											</a>
										</span>
										<p>Музыкальный лейбл нового поколения</p>
									</div>
								</div>
								<div className="project">
									<div className="image">
										<a href="http://smm.levelupworlds.com/" target="_blank">
											<img
												src="img/logo-promo.png"
												width="64px"
												alt="Levelup Promo"
											/>
										</a>
									</div>
									<div className="title">
										<span className="spacing">
											<a href="http://smm.levelupworlds.com/" target="_blank">
												Promo
											</a>
										</span>
										<p>Продвижение бизнеса в интернете</p>
									</div>
								</div>
								<div className="project">
									<div className="image">
										<a href="http://film.levelupworlds.com/" target="_blank">
											<img
												src="img/logo-film.png"
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
										<p>Профессиональная фото и видео съемка</p>
									</div>
								</div>
							</div>
							<div className="center">
								<div className="button-group">
									<button onClick={this.revealJumbotron} className="button">
										Назад
									</button>
								</div>
							</div>
						</div>
						</div>
					</div>
				</section>
			</DefaultContainer>
		);
	}
}


export default Index;
