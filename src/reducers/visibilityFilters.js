import { SET_FILTER } from '../actions/types';
import { VISIBILITY_FILTERS } from '../constants';

const initialState = VISIBILITY_FILTERS.ALL;

const visibilityFilters = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case SET_FILTER:
			return payload;
		default:
			return state;
	}
};

export default visibilityFilters;
