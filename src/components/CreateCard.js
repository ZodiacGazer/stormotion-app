import React from 'react';

// Assets
import placeHolder from '../assets/oval-46-shape-copy.png';
import './CreateCard.css';

const CreateCard = () => (
	<div className='card'>
		<div className='card__pic create-pic' style={{backgroundImage: `url(${placeHolder})`}}></div>
		<p className='card__title create-title'>Cоздать еще одну рассылку</p>
	</div>
);

export default CreateCard;