import React, { Component } from 'react';
import ContactModal from '../../components/ContactModal/ContactModal.js'
import InformationTable from '../../components/InformationTable/InformationTable.js'
import './partner.css'

class Partner extends Component {
	render() {
		const contactModalConfiguration = {
			title: 'Обратная связь',
			description: 'Партнёрская программа',
			content: 'С вашими партнёрскими предложениями вы можете обращаться при помощи данной формы обратной связи'
		}
		const informationTableItems = [
			{
				image: 'img/marketing.png',
				imageAlt: 'Приглашай клиентов',
				description: 'Шаг 1',
				title: 'Вы привлекаете клиентов любым способом'
			}, 
			{
				image: 'img/buy.png',
				description: 'Шаг 2',
				imageAlt: 'Клиент совершает покупку',
				title: 'Клиент совершает покупку'
			}, 
			{
				image: 'img/coins.png',
				description: 'Шаг 3',
				imageAlt: 'Вы получаете деньги за сделку',
				title: 'Вы получаете деньги за сделку'
			}
		]
		return ( 
			<div className="Partner Container">
				<h1>Партнёрам <small>Партнёрская программа</small></h1>
				<p className="primary">Вы имеете большую клиентскую базу? Мы предлагаем вам возможность на этом заработать!</p>
				<p className="primary">Суть партнёрской программы заключается в привлечении клиентов. Вы даёте нам заказчика, мы даём вам до 40% от сделки.</p>
				<InformationTable items={informationTableItems} />
				<p className="primary">Процент от сделки вычисляется индивидуально и требует отдельного рассмотрения. Начните работать с нами сегодня!</p>
				<ContactModal options={contactModalConfiguration}>
					<button className="button">Работать вместе</button>
				</ContactModal>
			</div>
		);
	}
}

export default Partner;