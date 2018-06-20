import React from 'react';

const PreviewCard = ({url: src}) => (
	<div className='card__pic preview-pic' style={{backgroundImage: `url(${src})`}}></div>
);

export default PreviewCard;