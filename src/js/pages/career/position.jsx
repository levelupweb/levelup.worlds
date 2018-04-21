import React, { Component } from 'react';
import dateFormat from 'dateformat';
import ContactForm from '../../components/contactForm/index';
import Modal from '../../components/modal';
import './position.css'

const contactModalConfiguration = {
	title: 'Отклик на вакансию',
	description: 'Ваше сообщение',
	content: 'Оставьте свою контактную информацию, а также рекомендуем прикрепить своё резюме, чтобы увеличить шансы на ответ!'
}

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
		placeholder: 'Ссылка на резюме',
		name: 'userResume',
		type: 'text',
		fieldName: 'Ссылка на резюме клиента'		
	}, {
		placeholder: 'Ссылка на портфолио',
		name: 'userPortfolio',
		type: 'text',
		fieldName: 'Ссылка на резюме клиента'
	}, {
		fieldName: 'Сообщение',
		placeholder: 'Ваше сообщение',
		name: 'userMessage',
		type: 'textarea'
}]

const positionFormRules = {
	userName: ['required'],
	userEmail: ['required', 'email'],
	userPhone: ['required', 'mobile'],
	userResume: ['required', 'url'],
	userPortfolio: ['required', 'url'],
	userMessage: ['required']
}

const renderContactForm = () => <ContactForm 
	isFluid={true} 
	rules={positionFormRules}
	fields={contactFormFields} />

export default class Position extends Component {
	renderList(items) {
		return items.map((item, i) => {
			if(item === items.length - 1) {
				return item
			} else {
				return `${item}, `
			}
		})
	}

	render() {
		const { title, level, description, needs, image, date } = this.props.position;

		return (
			<div className="Position">
				<div className="Position-date">{dateFormat(date, 'dd.mm.yy')}</div>
				<div className="Position-content">
					<div className="left">
						<img src={image} width="50px" alt={title} />
					</div>
					<div className="right">
						<h2>{title}</h2>
						<p className="Position-level"><strong>{level}</strong></p>
					</div>
				</div>
				<p>{description}</p>
				<p className="Position-needs"><strong>Требуемые навыки</strong>: {this.renderList(needs)}</p>
				<br />
				<Modal options={contactModalConfiguration} render={renderContactForm()}>
					<button className="button">Откликнуться</button>
				</Modal>
			</div>
		);
	}
}
