import React from 'react';
import ContactForm from '../../components/contactForm/ContactForm.js';
import Modal from '../../components/modal/Modal.js';
import InformationTable from '../../components/informationTable/InformationTable.js'

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

const Contact = () => {

	const renderContactForm = () => <ContactForm 
		isFluid={true} 
		fields={contactFormFields} />

	const contactModalConfiguration = {
		title: 'Обратная связь',
		description: 'Сообщение',
		content: 'С вашими деловыми предложениями вы можете обращаться при помощи данной формы обратной связи'
	}

	const informationTableItems = [
		{
			image: 'img/smartphone.png',
			imageSize: 64,
			imageAlt: 'Контктный телефон',
			description: '(903) 634-69-29'
		},
		{
			image: 'img/placeholder.png',
			imageAlt: 'Адрес',
			description: 'г. Москва, Пресненская наб., 6, стр. 2'
		},
		{
			image: 'img/paper-plane.png',
			imageAlt: 'Почта',
			description: 'levelupworlds@gmail.com'
		}
	]
	return (
		<div className="Contact Container">
			<div className="Container-inner">
				<h1>Контакты</h1>
				<p className="primary">У вас есть деловое предложение? Свяжитесь с нами при помощи любого доступного вам способа, используя нашу контактную информацию</p>
				<InformationTable items={informationTableItems} />
				<p className="primary">
					Также вы можете написать нам письмо на почту. Оставьте свою контактную информацию, если вы ждёте ответа.
				</p>
				<Modal options={contactModalConfiguration} render={renderContactForm()}>
					<button className="button">Написать нам</button>
				</Modal>
			</div>
		</div>
	);
}

export default Contact;