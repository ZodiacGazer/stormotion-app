import { ADD_PICTURE, REMOVE_PICTURE } from '../actionTypes';

export const addPicture = (url) => {
	return {
		type: ADD_PICTURE,
		url
	}
};

export const removePicture = (id) => {
	return {
		type: REMOVE_PICTURE,
		id
	}
}