import React from 'react';

// Styles
import './Navigation.css';

const Navigation = () => {
	return (
		<div className='nav'>
			<div className='nav__main'>
				<h1 className='nav__title'>Уведомления</h1>
				<div className='empty'></div>
			</div>
			<div className='nav__empty'></div>
		</div>
	)
};

export default Navigation;

