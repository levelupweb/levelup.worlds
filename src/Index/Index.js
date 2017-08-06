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
		  	document.querySelector('.Footer .List.projects').classList.add('visible')
		  	document.querySelector('.Footer .List.socials').classList.add('visible')
		  }
		});

		sr.reveal('.Default h1', { duration: 500, delay: 1000, origin: 'top' });
		sr.reveal('.Default .Footer', { duration: 500, origin: 'bottom', delay: 5500 }, 100)
		sr.reveal('.Default .Header', { duration: 500, origin: 'top', delay: 5000 }, 100)
	}

	render() {
		return (
			<DefaultContainer>
				<div className="Index Container">
					<h1>Levelup Worlds</h1>
					<div id="description">
				    <p>Привет!</p>
				    <p>Мы - это digital-агентство полного цикла. Наша <Link to="/page/team">команда</Link> разрабатывает эффективные продукты, которые помогают вашему бизнесу.</p>
					</div>
					<p className="primary"></p>
				</div>
			</DefaultContainer>
		);
	}
}

export default Index;