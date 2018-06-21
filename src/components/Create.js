import React from 'react';

// Components
import Navigation from './Navigation';
// import CreateContent from './CreateContent';
import ConnectedCreateContent from '../containers/ConnectedCreateContent';

const Create = ({match}) => {
	const id = match.params.id ? match.params.id: false;
	const title = id ? 'редактирование' : 'новое'
	return (
		<React.Fragment>
			<Navigation title={title} backSpace='on' />
			<ConnectedCreateContent />
		</React.Fragment>
	)	
};

export default Create;