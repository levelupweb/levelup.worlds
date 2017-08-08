import React from 'react';
import ContactModal from '../../components/ContactModal/ContactModal.js'
import InformationTable from '../../components/InformationTable/InformationTable.js';
import Socials from '../../components/Socials/Socials.js'

const About = (props) => {
	const contactModalConfiguration = {
		title: 'Обратная связь',
		description: 'Деловое предложение',
		content: 'С вашими деловыми предложениями вы можете обращаться при помощи данной формы обратной связи'
	}
	const informationTableItems = [
		{
			head: '45',
			title: 'Проектов',
			description: 'Мы берёмся даже за самые сложные проекты и доводим их до конца!'
		},
		{
			head: '8',
			title: 'Сотрудников',
			description: 'Наша команда состоит только из самых опытных специалистов.'
		},
		{
			head: '5',
			title: 'Лет',
			description: 'Мы работаем на рынке уже более 5 лет, поэтому нам можно доверять!'
		}
	]
	return (
		<div className="About Container">
			<Socials visible={true} />
			<h1>Levelup Worlds</h1>
			<p className="primary">
				Levelup Worlds - это <b className="primary">Digital-агентство</b> полного цикла, которое уже 5-й год помогает малому и среднему бизнесу выполнять свою работу
			</p>
			<p className="primary">
				Мы помогаем привлекать клиентов, рассказывать о вашем продукте, создавать сам продукт, продумывать концепции продукта и ещё много чего интересного.
			</p>
			<InformationTable items={informationTableItems} />
			<p className="primary">
				У вас есть деловое предложение? Напишите нам сегодня! Для этого вам необходимо просто нажать на кнопку ниже и следовать следующим инструкциям. Мы свяжемся с вами сразу, как это станет возможным
			</p>
			<ContactModal options={contactModalConfiguration}>
				<button className="button">Работать вместе</button>
			</ContactModal>
		</div>
	);
}

export default About;