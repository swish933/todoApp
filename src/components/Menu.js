import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, setFilter } from '../actions/actions';
import PropTypes from 'prop-types';
import styles from './Menu.module.css';

const Menu = ({ todos, setFilter, deleteTodo }) => {
	const handleClear = (e) => {
		const ids = todos.filter((todo) => todo.completed === true);
		ids.forEach(({ id }) => {
			deleteTodo(id);
		});
	};

	const handleFilter = () => {};
	return (
		<div className={styles.Menu}>
			{/* desktop menu */}
			<div className={styles.desktopDash}>
				<div>
					<p>5 items left</p>
				</div>
				<div className={styles.todoFilters}>
					<p onClick={handleFilter} name='all' className={styles.all}>
						All
					</p>
					<p onClick={handleFilter} name='active' className={styles.active}>
						Active
					</p>
					<p
						onClick={handleFilter}
						name='completed'
						className={styles.completed}>
						Completed
					</p>
				</div>
				<div>
					<p onClick={handleClear}>Clear Completed</p>
				</div>
			</div>

			{/* mobile menu */}
			<div className={styles.mobileDash}>
				<div className={styles.upper}>
					<div className={styles.counter}>
						<p>5 items left</p>
					</div>
					<div className={styles.clear}>
						<p onClick={handleClear}>Clear Completed</p>
					</div>
				</div>
				<div className={styles.mobileMenu}>
					<div className={styles.todoFilters}>
						<p onClick={handleFilter} name='all' className={styles.all}>
							All
						</p>
						<p onClick={handleFilter} name='active' className={styles.active}>
							Active
						</p>
						<p
							onClick={handleFilter}
							name='completed'
							className={styles.completed}>
							Completed
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

Menu.propTypes = {
	todos: PropTypes.array.isRequired,
	setFilter: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	todos: state.todos,
});

const mapDispatchToProps = { setFilter, deleteTodo };

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
