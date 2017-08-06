import React, { Component } from 'react';
import ContactModal from '../ContactModal/ContactModal.js'

class Partner extends Component {
	render() {
		const options = {
			title: 'Обратная связь',
			description: 'Партнёрская программа',
			content: 'С вашими партнёрскими предложениями вы можете обращаться при помощи данной формы обратной связи'
		}
		return ( 
			<div className="About Container">
				<h1>Партнёрам <small>Партнёрская программа</small></h1>
				<p className="primary">Вы имеете хорошую базу клиентов? Мы предлагаем вам возможность на этом заработать!</p>
				<p className="primary">Суть партнёрской программы заключается в привлечении клиентов. Вы даёте нам заказчика, мы даём вам до 40% от сделки.</p>
				<br />
				<ContactModal options={options}>
					<button className="button">Связаться</button>
				</ContactModal>
				
			</div>
		);
	}
}

export default Partner;