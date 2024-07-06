import { ACTION_TYPE } from '../constants/index.js';

export const loadPostAsync = (posts) => {
	return {
		type: ACTION_TYPE.LOAD_POST,
		payload: posts,
	};
};
