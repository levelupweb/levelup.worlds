import React from 'react';
import config from '../../utils/config'

const Logo = ({ size }) =>
	<img 
		src={config.static + '/img/logo-default.png'} 
		width={size + 'px'} 
		alt="Levelup Worlds" 
	/>

export default Logo