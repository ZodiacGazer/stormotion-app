import React from 'react';

import { NavLink, Link } from 'react-router-dom';

// Components
import Button from './Button';

// Assets
import './Navigation.css';
import addIcon from '../assets/shape-copy-line-line-copy.png';
import backSpaceIcon from '../assets/path-1629.png';

const Navigation = ({title, backSpace}) => {
	return (
		<div className='nav'>
			<div className='nav__main'>
				<div className='main__block'>
					{
						backSpace=='on' && <Link to='/'>
												<div className='backSpace'>
													<img src={backSpaceIcon} />
												</div>
											</Link>

					}
					<h1 className='nav__title'>{title}</h1>
						{ backSpace=='on' ?	<Link to='/create'>	
													<Button title='Сохранить' saveState='on' />
											</Link>
										  :
										  <Link to='/create'>	
													<Button title='Создать' saveState='off' />
										  </Link>
						}
				</div>
				<div className='empty'></div>
			</div>
			<div className='nav__empty'></div>
		</div>
	)
};

export default Navigation;

