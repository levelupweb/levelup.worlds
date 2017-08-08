import React, { Component } from 'react';
import Field from '../Field/Field.js'
import axios from 'axios'
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
		console.log(message)
		axios({
			url: 'http://beta.levelupworlds.com/gmail.php',
			headers: { 
				"Access-Control-Allow-Origin": "*" 
			},
			method: 'POST'
		})
	  .then((response) => {
	  	console.log(response)
	    this.handleResponse(response);
	  })
	  .catch((error) => {
	    this.handleResponse({
	    	success: false
	    })
	  });
	}
	handleResponse = (response) => {
		const { message, success, errors } = response;
		if(response.success) {
			this.setState({
				response: {
					...response,
					message,
					success,
					errors
				}
			})
		} else {
			this.setState({
				response: {
					...response,
					message,
					success,
					errors
				}
			})
		}
	}
	reveal = () => {
		this.setState({
			isRevealed: !this.state.isRevealed
		})
		toggleBlurOnBody()
	}
	updateMessage = (key, fieldName, value) => {
		this.setState({
			message: {
				...this.state.message,
				[key]: {
					fieldName,
					value
				}
			}
		})
	}
	renderAdditionalFields(fields) {
		return fields.map((field, i) => {
			const { title, name, type, fieldName } = field 
			return <Field key={i} fieldName={fieldName} onInput={this.updateMessage} title={title} name={name} type={type} />
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
							<Field fieldName="Тема сообщения" onInput={this.updateMessage} defaultValue={description} title="Тема сообщения" name="subject" type="hidden" />
							<Field fieldName="Имя клиента" onInput={this.updateMessage} title="Здесь ваше имя" name="userName" type="text" />
							<Field fieldName="E-Mail клиента" onInput={this.updateMessage} title="Здесь e-mail" name="userEmail" type="text" />
							{additionalFields && 
								this.renderAdditionalFields(additionalFields)
							}
							<Field fieldName="Сообщение" onInput={this.updateMessage} title="А здесь будет ваше сообщение.." name="userMessage" type="textarea" />
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