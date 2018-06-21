import React from 'react';

// Assets
import addIcon from '../assets/shape-copy-line-line-copy.png';
import './Button.css';

const Button = ({title, saveState}) => {
	const classState = saveState == 'on' ? null : 'disabled'
	return (
		<div className='button'>
			{saveState != 'on' && <img src={addIcon} className='button-icon' /> }
										<span className={`button-text ${classState}`}>{title}</span>
		</div>
	)
};

export default Button;