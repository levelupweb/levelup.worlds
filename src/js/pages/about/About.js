import React from 'react'; 
import ContactForm from '../../components/contactForm/ContactForm.js';
import Modal from '../../components/modal/Modal.js';
import InformationTable from '../../components/informationTable/InformationTable.js';
import Socials from '../../components/socials/Socials.js'

const contactFormFields = [
	{
		fieldName: 'Имя клиента',
		placeholder: 'Ваше имя',
		name: 'userName',
		type: 'text'
	},
	{
		fieldName: 'E-Mail',
		placeholder: 'Ваш E-Mail',
		name: 'userEmail',
		type: 'text'
	},
	{
		fieldName: 'Мобильный телефон',
		placeholder: 'Контактный телефон',
		name: 'userPhone',
		type: 'text'
	},
	{
		fieldName: 'Сообщение',
		placeholder: 'Ваше сообщение',
		name: 'userMessage',
		type: 'textarea'
	}
]

const About = (props) => {

	const renderContactForm = () => <ContactForm 
		isFluid={true} 
		fields={contactFormFields} />

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
			<div className="Container-inner">
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
				<Modal options={contactModalConfiguration} render={renderContactForm()}>
					<button className="button">Написать нам</button>
				</Modal>
			</div>
		</div>
	);
}

export default About;