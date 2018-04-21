import React from 'react';
import InformationTableItem from './item'

const InformationTable = (props) => {
	return (
		<div className="InformationTable">
			{props.items.map((item, i) => {
				const { head, title, description, image, imageAlt, imageSize, link } = item;
				return <InformationTableItem 
					head={head} 
					title={title} 
					description={description}
					image={image}
					link={link}
					imageAlt={imageAlt || title}
					imageSize={imageSize || 64}
					key={i} 
				/>
			})
		}
		</div>
	)
}

export default InformationTable;