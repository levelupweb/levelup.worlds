import React, { Component } from 'react';
import Modal from '../ContactModal/ContactModal.js'

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
				<p>Вы имеете хорошую базу клиентов? Мы предлагаем вам возможность на этом заработать!</p>
				<p>Суть партнёрской программы заключается в привлечении клиентов. Вы даёте нам заказчика, мы даём вам до 40% от сделки.</p>
				<br />
				<Modal options={options}>
					<button className="button">Связаться</button>
				</Modal>
				
			</div>
		);
	}
}

export default Partner;