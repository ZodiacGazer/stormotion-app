import React from 'react';

// Styles
import './Navigation.css';

const Navigation = ({title, backSpace}) => {
	return (
		<div className='nav'>
			<div className='nav__main'>
				<div className='main__block'>
					{
						backSpace=='on' && <div className='backSpace'>left</div>
					}
					<h1 className='nav__title'>{title}</h1>
				</div>
				<div className='empty'></div>
			</div>
			<div className='nav__empty'></div>
		</div>
	)
};

export default Navigation;

