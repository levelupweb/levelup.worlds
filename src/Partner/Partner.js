import React, { Component } from 'react';
import ContactModal from '../ContactModal/ContactModal.js'
import './partner.css'

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
				<p className="primary">Вы имеете большую клиентскую базу? Мы предлагаем вам возможность на этом заработать!</p>
				<p className="primary">Суть партнёрской программы заключается в привлечении клиентов. Вы даёте нам заказчика, мы даём вам до 40% от сделки.</p>
				<div className="steps">
					<div className="step">
						<img src="img/marketing.png" alt="Приглашай клиентов" width="50px" />
						<h4>Вы приглашаете клиентов</h4>
					</div>
					<div className="step">
						<img src="img/buy.png" alt="Клиент совершает покупку" width="50px" />
						<h4>Клиент совершает покупку</h4>
					</div>
					<div className="step">
						<img src="img/coins.png" alt="Вы получаете деньги" width="50px" />
						<h4>Вы получаете деньги за сделку</h4>
					</div>
				</div>
				<p className="primary">Процент от сделки вычисляется индивидуально и требует отдельного рассмотрения. Начните работать с нами сегодня!</p>
				<ContactModal options={options}>
					<button className="button">Работать вместе</button>
				</ContactModal>
			</div>
		);
	}
}

export default Partner;