import React from 'react';

// Assets
import deleteIcon from '../assets/shape-copy-line-line-copy-delete.png';
import './PreviewCard.css';

const PreviewCard = ({url: src, urlId, cardId, removePicture}) => (
	<div className='card__pic preview-pic' style={{backgroundImage: `url(${src})`}}>
		<img className='delete-icon' src={deleteIcon} />
	</div>
);

export default PreviewCard;