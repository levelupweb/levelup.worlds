import React from 'react';
import '../../../css/list.css';

const Socials = (props) => {
	return <ul className={(props.visible) ? 'visible list socials' : 'visible list'}>
    <a href="#"><li><i className="fa fa-twitter" href="#"></i></li></a>
    <a href="#"><li><i className="fa fa-facebook" href="#"></i></li></a>
    <a href="#"><li><i className="fa fa-vk" href="#"></i></li></a>
    <a href="#"><li><i className="fa fa-instagram" href="#"></i></li></a>
	</ul>
}

export default Socials