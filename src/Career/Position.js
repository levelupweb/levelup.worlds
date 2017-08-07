import React, { Component } from 'react';
import ContactModal from '../ContactModal/ContactModal.js'
import './position.css'

export default class Position extends Component {
	renderList(items) {
		return items.map((item, i) => {
			if(item == items.length - 1) {
				return item
			} else {
				return `${item}, `
			}
		})
	}
	render() {
		const { title, level, description, needs, image } = this.props.position;
		const options = {
			title: 'Обратная связь',
			description: 'Заявка на должность: ' + title,
			content: 'Оставьте свою контактную информацию, а также рекомендуем прикрепить своё резюме, чтобы увеличить шансы на ответ!'
		}
		const additionalFields = [{
			title: 'Ссылка на резюме',
			name: 'userResume',
			type: 'text'		
		}, {
			title: 'Ссылка на портфолио',
			name: 'userPortfolio',
			type: 'text'		
		}]
		return (
			<div className="Position">
				<div className="Position-content">
					<div className="left">
						<img src={image} width="50px" />
					</div>
					<div className="right">
						<h2>{title}</h2>
						<p className="Position-level">Уровень: <strong>{level}</strong></p>
						
					</div>
				</div>
				<p>{description}</p>
				<p className="Position-needs"><strong>Требуемые навыки</strong>: {this.renderList(needs)}</p>
				<ContactModal additionalFields={additionalFields} options={options}>
					<button className="button ">Откликнуться</button>
				</ContactModal>
			</div>
		);
	}
}
