import { combineReducers } from 'redux';
import cardReducer from './cardReducer';

const appReducer = combineReducers({
	cards: cardReducer
});

export default appReducer;