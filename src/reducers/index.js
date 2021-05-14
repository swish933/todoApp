import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilters';
import theme from './theme';

const rootReducer = combineReducers({ todos, visibilityFilter, theme });

export default rootReducer;
