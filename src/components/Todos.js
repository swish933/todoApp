import Todo from './Todo';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Todo.css';

const Todos = ({ todos }) => {
	return (
		<div className='Todos'>
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
};

const mapStateToProps = (state) => ({
	todos: state.todos,
});

export default connect(mapStateToProps, null)(Todos);
