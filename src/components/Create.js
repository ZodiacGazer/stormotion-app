import React from 'react';

// Components
import Navigation from './Navigation';
// import CreateContent from './CreateContent';
import ConnectedCreateContent from '../containers/ConnectedCreateContent';

const Create = () => (
	<React.Fragment>
		<Navigation title='новое' backSpace='on' />
		<ConnectedCreateContent />
	</React.Fragment>	
);

export default Create;