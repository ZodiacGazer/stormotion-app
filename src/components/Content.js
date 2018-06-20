import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Card from './Card';
import CreateCard from './CreateCard';

// Styles
import './Content.css';

const Content = ({cards}) => (
	<main className='content main-grid'>
		{Object.keys(cards).length ? Object.keys(cards).map((e, i) => (
								    <Card key={i.toString()} {...cards[e]} />))
								   : false}
		<Link to='/create'><CreateCard /></Link>
	</main>
);

export default Content;