import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './src/App';

// Testing
import store from './src/store/store';



ReactDOM.render(
	<App store={store} />,
	document.getElementById('root')
)