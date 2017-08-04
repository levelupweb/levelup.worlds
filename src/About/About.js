import React, { Component } from 'react';
import PageContainer from '../PageContainer.js'

class About extends Component {
	render() {
		return (
			<PageContainer>
				<div className="About Container">
					<h1>О компании <small>Немного о том, откуда мы вылезли</small></h1>
					<p>Levelup Worlds - это <b className="primary">Digital-агентство</b> полного цикла, которое уже 5-й год помогает малому и среднему бизнесу выполнять свою работу
					Мы помогаем привлекать клиентов, рассказывать о вашем продукте, создавать сам продукт, продумывать концепции продукта и ещё много чего интересного.</p>
				
					<div className="divider"></div>
					<div className="statistic">
						<div className="item">
							<div className="number">
								15
							</div>
							<div className="title">
								Проектов
							</div>
							<div className="description">
								Количество выполненных проектов с 2015 года
							</div>
						</div>
						<div className="item">
							<div className="number">
								24
							</div>
							<div className="title">
								Сотрудников
							</div>
							<div className="description">
								Количество активных сотрудников на текущий момент
							</div>
						</div>
						<div className="item">
							<div className="number">
								4	
							</div>
							<div className="title">
								Гос. заказов
							</div>
							<div className="description">
								Количество реализованных тендеров
							</div>
						</div>
					</div>

				</div>
			</PageContainer>
		);
	}
}

export default About;