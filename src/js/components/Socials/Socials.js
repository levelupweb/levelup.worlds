import React from 'react';
import '../../../css/list.css';

const Socials = (props) => {
	return <ul className={(props.visible) ? `visible list socials ${props.classNames}` : `socials list ${props.classNames}`}>
    <a href="https://twitter.com/levelupw" target="_blank"><li><i className="fa fa-twitter"></i></li></a>
    <a href="https://www.facebook.com/levelupw" target="_blank"><li><i className="fa fa-facebook"></i></li></a>
    <a href="http://vk.com/levelup_worlds" target="_blank"><li><i className="fa fa-vk"></i></li></a>
    <a href="http://www.instagram.com/lvlpteam/" target="_blank"><li><i className="fa fa-instagram"></i></li></a>
	</ul>
}

export default Socials