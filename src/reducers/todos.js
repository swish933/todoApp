import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/types';

const initialState = [];

const todos = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case ADD_TODO:
			return [
				...state,
				{
					content: payload.content,
					id: payload.id,
					completed: false,
				},
			];

		case DELETE_TODO:
			return state.filter((todo) => todo.id !== payload.id);

		case TOGGLE_TODO:
			return state.map((todo) => {
				if (todo.id === payload.id) {
					return { ...todo, completed: !todo.completed };
				} else return todo;
			});
		default:
			return state;
	}
};

export default todos;
