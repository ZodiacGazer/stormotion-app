import { CREATE_CARD, EDIT_CARD } from '../actionTypes';

const cardReducer = (state=[], action) => {
	switch (action.type) {
		case CREATE_CARD: {
			const {title, text, url} = action;
			return [
				...state, {title, text, url}
			]
		}
		case EDIT_CARD: {
			const {id, ...card} = action;
			return state.map((oldcard, i) => id == i ? {...card} : oldcard); 
		}
		default: {
			return state;
		}
	}
};

export default cardReducer;