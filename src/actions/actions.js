import {
	ADD_TODO,
	DELETE_TODO,
	SET_FILTER,
	TOGGLE_TODO,
	SET_THEME,
} from './types';
import { v4 } from 'uuid';

export const addTodo = (content) => ({
	type: ADD_TODO,
	payload: { content: content, id: v4() },
});

export const deleteTodo = (id) => ({
	type: DELETE_TODO,
	payload: { id: id },
});

export const toggleTodo = (id) => ({
	type: TOGGLE_TODO,
	payload: { id: id },
});

export const setFilter = (filter) => ({
	type: SET_FILTER,
	payload: { filter: filter },
});

export const setTheme = (theme) => ({
	type: SET_THEME,
	payload: { theme: theme },
});
