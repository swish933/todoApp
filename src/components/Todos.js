import Todo from './Todo';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Todos.module.css';

const Todos = ({ todos, visibilityFilter }) => {
	return (
		<div className={styles.Todos}>
			{todos.map((todo) => {
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
