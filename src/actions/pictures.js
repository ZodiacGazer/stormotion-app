import { ADD_PICTURE, REMOVE_PICTURE } from '../actionTypes';

export const addPicture = (url) => {
	return {
		type: ADD_PICTURE,
		url
	}
};

export const removePicture = (picId, cardId) => {
	return {
		type: REMOVE_PICTURE,
		picId,
		cardId
	}
}