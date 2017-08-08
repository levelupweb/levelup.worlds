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
			<h1>Контакты</h1>
			<p className="primary">У вас есть деловое предложение? Свяжитесь с нами при помощи любого доступного вам способа, используя нашу контактную информацию</p>
			<InformationTable items={informationTableItems} />
			<script type="text/javascript" charSet="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A67ab2ad93dbcd0205f231ff84a57503f15cd0c43aa3658467a6c246988c1e89b&amp;width=100%25&amp;height=350&amp;lang=ru_RU&amp;scroll=true"></script>
			<p className="primary">
				Также вы можете написать нам письмо на почту. Оставьте свою контактную информацию, если вы ждёте ответа.
			</p>
			<ContactModal options={contactModalConfiguration}>
				<button className="button">Написать нам</button>
			</ContactModal>
		</div>
	);
}

export default Contact;