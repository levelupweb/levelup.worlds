import React from 'react'
import InformationTable from '../../components/InformationTable/InformationTable.js';

const Projects = (props) => {
	const informationTableItems = [
		{
			image: 'img/layers.png',
			imageAlt: 'Веб-разработка',
			title: 'Web',
			description: 'Приложения',
			link: 'http://web.levelupworlds.com'
		},
		{
			image: 'img/film-strip.png',
			imageAlt: 'Фото и видео',
			title: 'Film',
			description: 'Фото и видео',
			link: 'http://film.levelupworlds.com'
		},
		{
			image: 'img/user.png',
			imageAlt: 'Блог-платформа',
			title: 'Name',
			description: 'Платформа',
			link: 'http://levelup.name/'
		},
		{
			image: 'img/diamond.png',
			imageAlt: 'Montemilli',
			title: 'Montemilli',
			description: 'Украшения',
			link: 'http://montemilli.com'
		},
		{
			image: 'img/megaphone.png',
			imageAlt: 'Продвижение',
			title: 'SMM & SEO',
			description: 'Продвижение',
			link: 'http://smm.levelupworlds.com'
		},
		{
			image: 'img/newspaper.png',
			imageAlt: 'Журнал',
			title: 'Mag',
			description: 'Журнал',
			link: 'http://levelupmag.com'
		}
	]
	return (
		<div className="Projects Container">
			<h1>Наши проекты</h1>
			<p className="primary">Проекты, созданные в Levelup. Здесь вы найдёте всё, что вам необходимо: от копирайтинга до разработки мобильных приложений</p>
			<InformationTable items={informationTableItems} /> 
			<p className="primary">To Be Continued....</p>
		</div>
	);
}

export default Projects;