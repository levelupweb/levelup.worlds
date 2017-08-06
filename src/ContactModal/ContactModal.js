import React, { Component } from 'react';
import Field from '../Field/Field.js'
import './contactModal.css'

export default class ContactModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isRevealed: false,
			message: {}
		}
	}
	componentDidMount() {
		const { description } = this.props.options
		this.updateMessage('subject', description)
	}
	handleSubmit = (e, message) => {
		e.preventDefault()
		// handle ajax to php
		console.log(message)
	}
	reveal = () => {
		this.setState({
			isRevealed: !this.state.isRevealed
		})
		toggleBlurOnBody()
	}
	updateMessage = (key, value) => {
		this.setState({
			message: {
				...this.state.message,
				[key]: value
			}
		})
	}
	renderAdditionalFields(fields) {
		return fields.map((field, i) => {
			const { title, name, type } = field 
			return <Field key={i} onInput={this.updateMessage} title={title} name={name} type={type} />
		})
	}
	render() {
		const { isRevealed, message } = this.state;
		const { additionalFields } = this.props;
		const { title, description, content } = this.props.options;
		return (
			<div>
				<div className={isRevealed ? 'Modal open' : 'Modal'}>
					<div className="Modal-wrapper inverted">
						<div className="Modal-title"><h1>{title} <small>{description}</small></h1></div>
						<div className="Modal-content"><p>{content}</p></div>
						<form onSubmit={(e) => {this.handleSubmit(e, message)}} className="fluid" ref={(e) => {this.contactForm = e}}>
							<Field onInput={this.updateMessage} defaultValue={description} title="Тема сообщения" name="subject" type="hidden" />
							<Field onInput={this.updateMessage} title="Здесь ваше имя" name="userName" type="text" />
							<Field onInput={this.updateMessage} title="Здесь e-mail" name="userEmail" type="text" />
							{additionalFields && 
								this.renderAdditionalFields(additionalFields)
							}
							<Field onInput={this.updateMessage} title="А здесь будет ваше сообщение.." name="userMessage" type="textarea" />
							<input type="submit" className="button ghost" value="Отправить" />
						</form>
						<div className="Modal-closer">
							<button className="button ghost" onClick={this.reveal}>Закрыть</button>
						</div>
					</div>
				</div>
				<span>{React.cloneElement(this.props.children, { 
					onClick: this.reveal
				})}</span>
			</div>
		);
	}
}


function toggleBlurOnBody() {
	document.querySelector('body').classList.toggle('blocked')
}