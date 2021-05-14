import { SET_THEME } from '../actions/types';
import { THEME } from '../constants';

const initialState = THEME.DARK;

const theme = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case SET_THEME:
			return payload.theme;
		default:
			return state;
	}
};

export default theme;
