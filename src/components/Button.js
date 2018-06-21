import React from 'react';

// Assets
import addIcon from '../assets/shape-copy-line-line-copy.png';
import './Button.css';

const Button = ({title, saveState}) => {
	return (
		<div className='button'>
			{saveState != 'on' && <img src={addIcon} className='button-icon' /> }
										<span className='button-text'>{title}</span>
		</div>
	)
};

export default Button;