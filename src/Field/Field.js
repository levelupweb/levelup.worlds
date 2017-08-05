import React, { Component } from 'react';
import './field.css'

export default class Field extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: false
		}
	}
	makeActive() {
		this.setState({
			isActive: true
		})
	}
	makeUnactive() {
		if(!this.input.value) {
			this.setState({
				isActive: false
			})
		}
	}
	render() {
		const { isActive } = this.state;
		const { title, name, type, onInput } = this.props;
		switch(type) {
			case 'hidden':
			return null;
			case 'textarea':
			return (<div className="field">
				{!isActive &&
					<label>{title}</label>
				}
				<textarea 
					onInput={(e) => {onInput(name, e.target.value)}}
					ref={(e) => {this.input = e}} 
					onBlur={() => {this.makeUnactive()}} 
					onFocus={() => {this.makeActive()}} 
					name={name} 
					rows="4"
				></textarea>
			</div>)
			default:
			return (<div className={isActive ? 'field active' : 'field'}>
				<label>{title}</label>
				<input 
					onInput={(e) => {onInput(name, e.target.value)}}
					ref={(e) => {this.input = e}} 
					onBlur={() => {this.makeUnactive()}} 
					onFocus={() => {this.makeActive()}}  
					type={type || 'text'} 
					name={name} 
				/>
			</div>)
		}
	}
}
