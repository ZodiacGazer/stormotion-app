import React from 'react';

import { Link, Route } from 'react-router-dom';

// Components
import Card from './Card';
import CreateCard from './CreateCard';
import Create from './Create';

// Styles
import './Content.css';

const Content = ({match, cards}) => (
	<main className='content main-grid'>
		{Object.keys(cards).length ? Object.keys(cards).map((e, i) => (
								    <Link to={`/${i}`} key={i.toString()} ><Card {...cards[e]} /></Link>))
								   : false}
		<Link to='/create'><CreateCard /></Link>
		<Route path={`${match.url}/:id`} redner={() => <div>Hey there</div>} />
	</main>
);

export default Content;