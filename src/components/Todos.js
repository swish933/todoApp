import Todo from './Todo';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Todos.module.css';
import { VISIBILITY_FILTERS } from '../constants';

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

const Todos = ({ todos, filter }) => {
	return (
		<div className={styles.Todos}>
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
	);
};

Todos.propTypes = {
	todos: PropTypes.array.isRequired,
	filter: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
	todos: state.todos,
	filter: state.visibilityFilter,
});

export default connect(mapStateToProps, null)(Todos);
