import React from 'react';
import config from '../../../../config.js'

const Logo = ({ size }) =>
	<img 
		src={config.staticURL + '/img/logo-default.png'} 
		width={size + 'px'} 
		alt="Levelup Worlds" 
	/>

export default Logo