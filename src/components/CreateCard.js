import React from 'react';

// Assets
import placeHolder from '../assets/createCard.png';

const CreateCard = () => (
	<div className='card'>
		<div className='card__pic create-pic' style={{backgroundImage: `url(${placeHolder})`}}></div>
		<p className='card__title create-title'>создать еще одну рассылку</p>
	</div>
);

export default CreateCard;