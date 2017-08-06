import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import DefaultContainer from '../DefaultContainer.js'
import Typed from 'typed.js'
import cookies from 'js-cookie'
import ScrollReveal from 'scrollreveal'
import './index.css'

class Index extends Component {

	componentDidMount() {
		var sr = ScrollReveal();
		new Typed('.Index .primary', {
		  stringsElement: '#description',
		  typeSpeed: 15,
		  showCursor: false,
		  onComplete() {
		  	document.querySelector('.Index .List.projects').classList.add('visible')
		  	document.querySelector('.Index .List.socials').classList.add('visible')
		  }
		});

		sr.reveal('.Default h1', { duration: 500, delay: 1000, origin: 'top' });
		sr.reveal('.Default .List.projects a', { duration: 500, origin: 'top', delay: 4000 }, 100)
		sr.reveal('.Default .List.socials a', { duration: 500, origin: 'bottom', delay: 4000 }, 100)
		sr.reveal('.Default .Footer', { duration: 500, origin: 'bottom', delay: 5500 }, 100)
		sr.reveal('.Default .Header', { duration: 500, origin: 'top', delay: 5000 }, 100)
	}

	render() {
		return (
			<DefaultContainer>
				<div className="Index Container">
					<ul className="socials List">
				    <a href="#"><li><i className="fa fa-twitter" href="#"></i></li></a>
				    <a href="#"><li><i className="fa fa-facebook" href="#"></i></li></a>
				    <a href="#"><li><i className="fa fa-vk" href="#"></i></li></a>
				    <a href="#"><li><i className="fa fa-instagram" href="#"></i></li></a>
					</ul>
					<h1>Levelup Worlds</h1>
					<div id="description">
				    <p>Привет!</p>
				    <p>Мы - это digital-агентство полного цикла. Наша <Link to="/page/team">команда</Link> разрабатывает эффективные продукты, которые помогают вашему бизнесу.</p>
					</div>
					<p className="primary"></p>
					<ul className="List projects">
						<a href="#"><li>NAME</li></a>
						<a href="#"><li>SMM</li></a>
						<a href="#"><li>WEB</li></a>
						<a href="#"><li>FILM</li></a>
						<a href="#"><li>MONTEMILLI</li></a>
						<a href="#"><li>MAG</li></a>
					</ul>
				</div>
			</DefaultContainer>
		);
	}
}

export default Index;