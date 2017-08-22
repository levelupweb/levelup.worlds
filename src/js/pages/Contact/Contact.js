import React from 'react';
import ContactModal from '../../components/ContactModal/ContactModal.js'
import InformationTable from '../../components/InformationTable/InformationTable.js'

const Contact = () => {
	const contactModalConfiguration = {
		title: 'Обратная связь',
		description: 'Сообщение',
		content: 'С вашими деловыми предложениями вы можете обращаться при помощи данной формы обратной связи'
	}
	const informationTableItems = [
		{
			image: 'img/smartphone.png',
			imageSize: 64,
			imageAlt: 'Контктный телефон',
			title: 'Наш телефон',
			description: '(903) 634-69-29'
		},
		{
			image: 'img/placeholder.png',
			imageAlt: 'Адрес',
			title: 'Наш адрес',
			description: 'г. Москва, Пресненская наб., 6, стр. 2'
		},
		{
			image: 'img/paper-plane.png',
			imageAlt: 'Почта',
			title: 'Наша почта',
			description: 'levelupworlds@gmail.com'
		},
		
	]
	return (
		<div className="Contact Container">
			<div className="Container-inner">
				<h1>Контакты</h1>
				<p className="primary">У вас есть деловое предложение? Свяжитесь с нами при помощи любого доступного вам способа, используя нашу контактную информацию</p>
				<InformationTable items={informationTableItems} />
				<p className="primary">
					Также вы можете написать нам письмо на почту. Оставьте свою контактную информацию, если вы ждёте ответа.
				</p>
				<ContactModal options={contactModalConfiguration}>
					<button className="button">Написать нам</button>
				</ContactModal>
			</div>
		</div>
	);
}

export default Contact;