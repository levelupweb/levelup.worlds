import React, { Component } from 'react';
import Position from './Position.js'
import positions from './positions.js'

export default class Career extends Component {
	renderPositions(positions) {
		return positions.map((item, i) => {
			return <Position position={item} key={i} />
		})
	}
	render() {
		return (
			<div className="Career Container">
				<h1>Вакансии</h1>
				<p className="primary">Хотите попробовать себя в роли нового члена команды Levelup? Возможно это ваш шанс обрести новый дружелюбный коллектив!</p>
				<div className="divider"></div>
				<div className="positions">
					{this.renderPositions(positions)}
				</div>
			</div>
		);
	}
}
