import React from 'react';

// Assets
import './Card.css';
import placeHolder from '../assets/placeholder.png';


const Card = ({title, text, url}) => {
	const link = url ? url[0] : placeholder;
	return (
		<div className='card'>
			<div className='card__pic' style={{backgroundImage: `url(${link})`}}></div>
			<p className='card__title'>{title}</p>
		</div>
	)
	
};

export default Card;