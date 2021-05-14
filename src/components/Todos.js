import { Fragment } from 'react';
import Todo from './Todo';
import Menu from './Menu';
import styles from './Todos.module.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { VISIBILITY_FILTERS, THEME } from '../constants';
import cx from 'classnames';

const getTodobyFilter = (todos, filter) => {
	switch (filter) {
		case VISIBILITY_FILTERS.COMPLETED:
			return todos.filter((todo) => todo.completed);
		case VISIBILITY_FILTERS.INCOMPLETE:
			return todos.filter((todo) => !todo.completed);
		default:
			return todos;
	}
};

const Todos = ({ todos, filter, theme }) => {
	return (
		<Fragment>
			<div
				className={cx(styles.Todos, {
					[styles.darkMode]: theme === THEME.DARK,
					[styles.lightMode]: theme === THEME.LIGHT,
				})}>
				{getTodobyFilter(todos, filter).map((todo) => {
					return (
						<Todo
							key={todo.id}
							content={todo.content}
							id={todo.id}
							completed={todo.completed}
						/>
					);
				})}
			</div>
			<Menu theme={theme} todos={todos} filter={filter} />
		</Fragment>
	);
};

Todos.propTypes = {
	todos: PropTypes.array.isRequired,
	filter: PropTypes.string.isRequired,
	theme: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
	todos: state.todos,
	filter: state.visibilityFilter,
	theme: state.theme,
});

export default connect(mapStateToProps, null)(Todos);
