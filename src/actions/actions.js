import { ADD_TODO, DELETE_TODO, SET_FILTER, TOGGLE_TODO } from './types';
import { v4 } from 'uuid';

export const addTodo = (content) => ({
	type: ADD_TODO,
	payload: { content: content, id: v4() },
});

export const deleteId = (id) => ({
	type: DELETE_TODO,
	payload: { id: id },
});

export const toggleTodo = (id) => ({
	type: TOGGLE_TODO,
	id: id,
});

export const setFilter = (filter) => ({
	type: SET_FILTER,
	payload: filter,
});
