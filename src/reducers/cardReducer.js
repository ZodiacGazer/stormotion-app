import { CREATE_CARD, REMOVE_CARD } from '../actionTypes';

const cardReducer = (state=[], action) => {
	switch (action.type) {
		case CREATE_CARD: {
			const {title, text, url} = action;
			return [
				...state, {title, text, url}
			]
		}
		default: {
			return state;
		}
	}
};

export default cardReducer;