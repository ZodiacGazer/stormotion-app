import { ADD_PICTURE, REMOVE_PICTURE } from '../actionTypes';

const picturesReducer = (state=[], action) => {
	switch (action.type) {
		case ADD_PICTURE: {
			const {url} = action;
			return [...state, url]
		};
		case REMOVE_PICTURE: {
			const {id} = action;
			return state.filter;
		}
	}
}