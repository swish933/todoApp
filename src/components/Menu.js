import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, setFilter } from '../actions/actions';
import PropTypes from 'prop-types';
import styles from './Menu.module.css';
import cx from 'classnames';
import { THEME, VISIBILITY_FILTERS } from '../constants';

const Menu = ({ todos, setFilter, deleteTodo, theme, filter }) => {
	const active = todos.filter((todo) => !todo.completed).length;
	const handleClear = () => {
		const ids = todos.filter((todo) => todo.completed === true);
		ids.forEach(({ id }) => {
			deleteTodo(id);
		});
	};

	const handleFilter = (e) => {
		setFilter(e.target.title);
	};

	return (
		<div className={styles.Menu}>
			{/* desktop menu */}
			<div
				className={cx(styles.desktopDash, {
					[styles.darkMode]: theme === THEME.DARK,
					[styles.lightMode]: theme === THEME.LIGHT,
				})}>
				<div>
					<p>{active === 1 ? `${active} item left` : `${active} items left`}</p>
				</div>
				<div className={styles.todoFilters}>
					<p
						onClick={handleFilter}
						title='all'
						className={cx({
							[styles.active]: filter === VISIBILITY_FILTERS.ALL,
						})}>
						All
					</p>
					<p
						onClick={handleFilter}
						title='active'
						className={cx({
							[styles.active]: filter === VISIBILITY_FILTERS.INCOMPLETE,
						})}>
						Active
					</p>
					<p
						onClick={handleFilter}
						title='completed'
						className={cx({
							[styles.active]: filter === VISIBILITY_FILTERS.COMPLETED,
						})}>
						Completed
					</p>
				</div>
				<div>
					<p onClick={handleClear}>Clear Completed</p>
				</div>
			</div>

			{/* mobile menu */}
			<div className={styles.mobileDash}>
				<div
					className={cx(styles.upper, {
						[styles.darkMode]: theme === THEME.DARK,
						[styles.lightMode]: theme === THEME.LIGHT,
					})}>
					<div className={styles.counter}>
						<p>
							{active === 1 ? `${active} item left` : `${active} items left`}
						</p>
					</div>
					<div className={styles.clear}>
						<p onClick={handleClear}>Clear Completed</p>
					</div>
				</div>
				<div
					className={cx(styles.mobileMenu, {
						[styles.darkMode]: theme === THEME.DARK,
						[styles.lightMode]: theme === THEME.LIGHT,
					})}>
					<div className={styles.todoFilters}>
						<p
							onClick={handleFilter}
							title='all'
							className={cx({
								[styles.active]: filter === VISIBILITY_FILTERS.ALL,
							})}>
							All
						</p>
						<p
							onClick={handleFilter}
							title='active'
							className={cx({
								[styles.active]: filter === VISIBILITY_FILTERS.INCOMPLETE,
							})}>
							Active
						</p>
						<p
							onClick={handleFilter}
							title='completed'
							className={cx({
								[styles.active]: filter === VISIBILITY_FILTERS.COMPLETED,
							})}>
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

const mapDispatchToProps = { setFilter, deleteTodo };

export default connect(null, mapDispatchToProps)(Menu);
