import React from 'react';

// Components
import Navigation from './Navigation';
// import Content from './Content';
import ConnectedContent from '../containers/ConnectedContent';


const Main = () => (
	<React.Fragment>
		<Navigation title='уведомления' />
		<ConnectedContent />
	</React.Fragment>
);

export default Main;