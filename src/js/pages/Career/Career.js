import React, { Component } from 'react';
import Position from './Position.js'
import positions from './positions.js'
import './career.css'

class Career extends Component {
	renderPositions(positions) {
		const sortedPositions = positions.sort((a, b) => {
		  return new Date(a.date) - new Date(b.date);
		});
		return sortedPositions.map((item, i) => {
			return <Position position={item} key={i} />
		})
	}
	render() {
		return (
			<div className="page page-career">
				<div className="block">
					<div className="block-title left" id="prices">
						<h5 className="super title">
							Карьера в Levelup
						</h5>
						<p className="description">Открытые вакансии</p>
					</div>
				</div>
				<div className="block">
					<p className="primary">Хотите попробовать себя в роли нового члена команды Levelup? Возможно это ваш шанс обрести новый дружелюбный коллектив!</p>
				</div>
				<div className="block">
					<div className="positions">
						{this.renderPositions(positions)}
					</div>
				</div>
			</div>
		);
	}
}

export default Career
