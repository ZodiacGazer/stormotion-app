import React from 'react';

import { Provider } from 'react-redux';

// Router
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// Components
import Main from './components/Main';
import Create from './components/Create';

const App = ({store}) => (
	<Provider store={store}>
		<Router>
			<Switch>
				<Route exact path='/' component={Main} />
				<Route path='/create' component={Create} />
				<Route render={() => <div>Not found</div>} />
			</Switch>
		</Router>
	</Provider>
);

export default App;