import { CREATE_CARD, EDIT_CARD } from '../actionTypes';

export const createCard = (title, text, url) => {
	return {
		type: CREATE_CARD,
		title,
		text,
		url
	}
};