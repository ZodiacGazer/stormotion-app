import { CREATE_CARD, EDIT_CARD, REMOVE_PICTURE } from '../actionTypes';

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
		case REMOVE_PICTURE: {
			const {picId, cardId} = action;
			return state.map((oldCard, i) => {
				if (i == cardId) {
					let url = oldCard.url.filter((oldUrl, k) => k != picId);
					return {...oldCard, url};
				} else {
					return oldCard;
				}
			});
		}
		default: {
			return state;
		}
	}
};

export default cardReducer;