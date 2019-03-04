import React from 'react';

const ImageList = (props) => {
		const images = props.images.map(({description, id, urls}) => {
			return <img className="ui medium bordered image" key={id} src={urls.regular} alt={description} />
		});

		return(
			<div className="ui fluid image">{images}</div>
		)
};

export default ImageList;

