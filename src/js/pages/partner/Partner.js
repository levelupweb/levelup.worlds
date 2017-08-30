import React, { Component } from 'react';
import InformationTable from '../../components/informationTable/InformationTable.js'
import ContactForm from '../../components/contactForm/ContactForm.js';
import Modal from '../../components/modal/Modal.js';
import config from '../../../../config.js'
import { Helmet } from 'react-helmet'
import './partner.css'

const contactFormFields = [ {
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
}]

const contactFormRules = {
	userName: ['required'],
	userEmail: ['required', 'email'],
	userPhone: ['required', 'mobile'],
	userMessage: ['required']
}

class Partner extends Component {
	render() {
		const renderContactForm = () => <ContactForm 
			isFluid={true} 
			rules={contactFormRules}
			fields={contactFormFields} />

		const contactModalConfiguration = {
			title: 'Обратная связь',
			description: 'Партнёрская программа',
			content: 'С вашими партнёрскими предложениями вы можете обращаться при помощи данной формы обратной связи'
		}
		const informationTableItems = [
			{
				image: config.staticURL + '/img/marketing.png',
				imageAlt: 'Приглашай клиентов',
				title: 'Шаг 1',
				description: 'Вы привлекаете клиентов любым способом'
			}, 
			{
				image: config.staticURL + '/img/buy.png',
				title: 'Шаг 2',
				imageAlt: 'Клиент совершает покупку с вашим посредничеством',
				description: 'Клиент совершает покупку с вашим посредничеством'
			}, 
			{
				image: config.staticURL + '/img/coins.png',
				title: 'Шаг 3',
				imageAlt: 'Вы получаете деньги за сделку',
				description: 'Вы получаете деньги за сделку'
			}
		]
		return ( 
			<div className="page page-partner">
				<Helmet>
      		<title>Партнёрам - Levelup Worlds</title>
      		<meta name="description" content="Предложение для партнёров Levelup Worlds. Digital-студия полного цикла" />
  			</Helmet>
				<div className="block">
					<div className="block-title left" id="prices">
						<h5 className="super title">
							Партнёрам
						</h5>
						<p className="description">Партнёрская программа</p>
					</div>
				</div>
				<div className="block">
					<p className="primary">Вы имеете большую клиентскую базу? Мы предлагаем вам возможность на этом заработать!</p>
				</div>	
				<div className="block">
					<p className="primary">Суть партнёрской программы заключается в привлечении клиентов. Вы даёте нам заказчика, мы даём вам до 40% от сделки.</p>
				</div>	
				<div className="block">
					<InformationTable items={informationTableItems} />
				</div>	
				<div className="block">
					<p className="primary">Процент от сделки вычисляется индивидуально и требует отдельного рассмотрения. Начните работать с нами сегодня!</p>
				</div>	
				<div className="block">
					<Modal options={contactModalConfiguration} render={renderContactForm()}>
						<button className="button">Написать нам</button>
					</Modal>
				</div>
			</div>
		);
	}
}

export default Partner;