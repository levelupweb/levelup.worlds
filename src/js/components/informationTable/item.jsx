import React from 'react';
import './styles.css';

const InformationTableItem = (props) => {
	const { head, title, description, image, imageAlt, imageSize, link } = props;
	return (
		<div className="InformationTableItem">
			<div className="InformationTableItem-head">
				{image ? 
					<img src={image} alt={imageAlt} width={`${imageSize}px`} />
					:
					<span>{head}</span>
				}
			</div>
			<div className="InformationTableItem-title">
				{link ? 
					<a href={link} target="_blank">{title}</a>
						:
					<span>{title}</span>
				}
			</div>
			<div className="InformationTableItem-description">
				{description}
			</div>
		</div>
	);
} 

export default InformationTableItem;