import React, { Component } from 'react';
import ContactModal from '../ContactModal/ContactModal.js'

class Contact extends Component {
	render() {
		const options = {
			title: 'Обратная связь',
			description: 'Сообщение',
			content: 'С вашими деловыми предложениями вы можете обращаться при помощи данной формы обратной связи'
		}
		return (
			<div className="Contact Container">
				<h1>Контакты</h1>
				<p className="primary">У вас есть деловое предложение? Свяжитесь с нами при помощи любого доступного вам способа, используя нашу контактную информацию</p>
				<div className="statistic">
					<div className="item">
						<div className="number">
							<img src="img/smartphone.png" width="64px" />
						</div>
						<div className="title">
							Телефон
						</div>
						<div className="description">
							(903) 634-69-29
						</div>
					</div>
					<div className="item">
						<div className="number">
							<img src="img/placeholder.png" width="64px" />
						</div>
						<div className="title">
							Адрес
						</div>
						<div className="description">
							г. Москва, Пресненская наб., 6, стр. 2
						</div>
					</div>
					<div className="item">
						<div className="number">
							<img src="img/paper-plane.png" width="64px" />	
						</div>
						<div className="title">
							Почта
						</div>
						<div className="description">
							levelupworlds@gmail.com
						</div>
					</div>
				</div>
				<script crossOrigin={true} type="text/javascript" charSet="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A67ab2ad93dbcd0205f231ff84a57503f15cd0c43aa3658467a6c246988c1e89b&amp;width=100%25&amp;height=350&amp;lang=ru_RU&amp;scroll=true"></script>
				<p className="primary">
					Также вы можете написать нам письмо на почту. Оставьте свою контактную информацию, если вы ждёте ответа.
				</p>
				<ContactModal options={options}>
					<button className="button">Написать нам</button>
				</ContactModal>
			</div>
		);
	}
}

export default Contact;