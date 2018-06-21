import React from 'react';

// Components
import Navigation from './Navigation';
// import Content from './Content';
import ConnectedContent from '../containers/ConnectedContent';


const Main = ({match}) => (
	<React.Fragment>
		<Navigation title='уведомления' />
		<ConnectedContent match={match.url} />
	</React.Fragment>
);

export default Main;