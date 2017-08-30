import React from 'react';
import ContactForm from '../../components/contactForm/ContactForm.js';
import Modal from '../../components/modal/Modal.js';
import InformationTable from '../../components/informationTable/InformationTable.js'
import config from '../../../../config.js'
import Helmet from 'react-helmet';

const contactFormFields = [{
		fieldName: 'Имя клиента',
		placeholder: 'Ваше имя',
		name: 'userName',
		type: 'text'
	}, {
		fieldName: 'E-Mail',
		placeholder: 'Ваш E-Mail',
		name: 'userEmail',
		type: 'text'
	}, {
		fieldName: 'Мобильный телефон',
		placeholder: 'Контактный телефон',
		name: 'userPhone',
		type: 'text'
	}, {
		fieldName: 'Сообщение',
		placeholder: 'Ваше сообщение',
		name: 'userMessage',
		type: 'textarea'
} ]

const contactFormRules = {
	userName: ['required'],
	userEmail: ['required', 'email'],
	userPhone: ['required', 'mobile'],
	userMessage: ['required']
}

const Contact = () => {
	const renderContactForm = () => <ContactForm 
		isFluid={true} 
		rules={contactFormRules}
		fields={contactFormFields} 
	/>

	const contactModalConfiguration = {
		title: 'Обратная связь',
		description: 'Сообщение',
		content: 'С вашими деловыми предложениями вы можете обращаться при помощи данной формы обратной связи'
	}

	return (
		<div className="page page-contact">
			<Helmet>
        <title>Контакты - Levelup Worlds</title>
        <meta name="description" content="Контакты Levelup Worlds. Студия веб-разработок" />
    		<meta name="keywords" content="веб-разработка, веб агентство, создать веб-приложение, разработка приложений, купить сайт, создать сайт в студии под ключ, сайт под ключ купить" />
    	</Helmet>
			<div className="block">
				<div className="block-title left" id="prices">
					<h5 className="super title">
						Контакты
					</h5>
					<p className="description">Как с нами связаться</p>
				</div>
			</div>
			<div className="block">
				<p className="primary">У вас есть деловое предложение? Свяжитесь с нами при помощи любого доступного вам способа, используя нашу контактную информацию</p>
			</div>
			<div className="block">
				<div className="list">
					<div className="item">
						<div className="icon">
							<img src={config.staticURL + "/img/paper-plane.png"} alt="Почта"/>
						</div>
						<div className="content">
							hh@levelupworlds.com
						</div>
					</div>
					<div className="item">
						<div className="icon">
							<img src={config.staticURL + "/img/placeholder.png"} alt="Адрес"/>
						</div>
						<div className="content">
							г. Москва, Пресненская наб., 6, стр. 2
						</div>
					</div>
					<div className="item">
						<div className="icon">
							<img src={config.staticURL + "/img/smartphone.png"} alt="Мобильный телефон"/>
						</div>
						<div className="content">
							(903) 634-69-29
						</div>
					</div>
				</div>
			</div>	
			<div className="block">
				<p className="primary">
					Также вы можете написать нам письмо на почту. Оставьте свою контактную информацию, если вы ждёте ответа.
				</p>
			</div>
			<div className="block">
				<Modal options={contactModalConfiguration} render={renderContactForm()}>
					<button className="button">Написать нам</button>
				</Modal>
			</div>
		</div>
	);
}

export default Contact;