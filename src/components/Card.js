import React from 'react';

// Assets
import './Card.css';
import placeHolder from '../assets/picture.png';


const Card = ({title, text, url}) => {
	let styles;
	const link = url.length ? url[0] : placeHolder;
	const utils = url.length ? true : false;
	if (utils) {
		styles = {
			height: null,
			bs: 'cover',
			border: null 
		}; 
	} else {
		styles = {
			height: '146px',
			bs: 'contain',
			border: 'solid 1px rgba(106, 117, 131, 0.16)'
		};
	}
	return (
		<div className='card'>
			<div className='card__pic' style={{backgroundImage: `url(${link})`, width: `${styles.height}`, backgroundSize: `${styles.bs}`}}></div>
			<p className='card__title' style={{borderTop: `${styles.border}`}}>{title}</p>
		</div>
	)
	
};

export default Card;