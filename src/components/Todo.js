import React from 'react';
import styles from './Todo.module.css';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions/actions';
import PropTypes from 'prop-types';
import deleteIcon from '../images/icon-cross.svg';
import cx from 'classnames';
import { THEME } from '../constants';

const Todo = ({ content, id, completed, toggleTodo, deleteTodo, theme }) => {
	const onClick = () => {
		toggleTodo(id);
	};

	return (
		<div
			className={cx(styles.Todo, {
				[styles.darkMode]: theme === THEME.DARK,
				[styles.lightMode]: theme === THEME.LIGHT,
			})}
			onClick={onClick}>
			<div className={cx(styles.checkbox)}>
				<input
					type='checkbox'
					id={id}
					checked={completed}
					onChange={() => {
						toggleTodo(id);
					}}
				/>
				<label htmlFor={id}></label>
			</div>
			<p>{content}</p>
			<div className={styles.delete}>
				<img
					src={deleteIcon}
					alt='delete icon'
					onClick={() => {
						deleteTodo(id);
					}}
				/>
			</div>
		</div>
	);
};

Todo.propTypes = {
	toggleTodo: PropTypes.func.isRequired,
	theme: PropTypes.string.isRequired,
	deleteTodo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	theme: state.theme,
});

const mapDispatchToProps = { toggleTodo, deleteTodo };

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
