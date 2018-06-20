import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './src/App';

// Testing
import store from './src/store/store';
localStorage.clear();

console.log(store.getState());
store.subscribe(() => {
	console.log(store.getState());
})

ReactDOM.render(
	<App store={store} />,
	document.getElementById('root')
)