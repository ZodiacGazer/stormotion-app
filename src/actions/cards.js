import { CREATE_CARD, EDIT_CARD } from '../actionTypes';

export const createCard = (title, text, url) => {
	return {
		type: CREATE_CARD,
		title,
		text,
		url
	}
};

export const editCard = (id, title, text, url) => {
	return {
		type: EDIT_CARD,
		id,
		title,
		text,
		url
	}
};