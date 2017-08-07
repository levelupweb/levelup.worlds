import React, { Component } from 'react';
import ContactModal from '../ContactModal/ContactModal.js'

class About extends Component {
	render() {
		const options = {
			title: 'Обратная связь',
			description: 'Деловое предложение',
			content: 'С вашими деловыми предложениями вы можете обращаться при помощи данной формы обратной связи'
		}
		return (
			<div className="About Container">
				<h1>Levelup Worlds</h1>
				<p className="primary">
					Levelup Worlds - это <b className="primary">Digital-агентство</b> полного цикла, которое уже 5-й год помогает малому и среднему бизнесу выполнять свою работу
				</p>
				<p className="primary">
					Мы помогаем привлекать клиентов, рассказывать о вашем продукте, создавать сам продукт, продумывать концепции продукта и ещё много чего интересного.
				</p>
				<div className="statistic">
					<div className="item">
						<div className="number">
							45
						</div>
						<div className="title">
							Проектов
						</div>
						<div className="description">
							Мы берёмся даже за самые сложные проекты и доводим их до конца!
						</div>
					</div>
					<div className="item">
						<div className="number">
							8
						</div>
						<div className="title">
							Сотрудников
						</div>
						<div className="description">
							Наша команда состоит только из самых опытных специалистов.
						</div>
					</div>
					<div className="item">
						<div className="number">
							5	
						</div>
						<div className="title">
							Лет
						</div>
						<div className="description">
							Мы работаем на рынке уже более 5 лет, поэтому нам можно доверять!
						</div>
					</div>
				</div>
				<p className="primary">
					У вас есть деловое предложение? Напишите нам сегодня! Для этого вам необходимо просто нажать на кнопку ниже и следовать следующим инструкциям. Мы свяжемся с вами сразу, как это станет возможным
				</p>
				<ContactModal options={options}>
					<button className="button">Работать вместе</button>
				</ContactModal>
			</div>
		);
	}
}

export default About;