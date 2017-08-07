import React, { Component } from 'react';
import Position from './Position.js'
import positions from './positions.js'
import './career.css'

export default class Career extends Component {
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
			<div className="Career Container">
				<p className="primary">Хотите попробовать себя в роли нового члена команды Levelup? Возможно это ваш шанс обрести новый дружелюбный коллектив!</p>
				<div className="divider"></div>
				<div className="positions">
					{this.renderPositions(positions)}
				</div>
			</div>
		);
	}
}
