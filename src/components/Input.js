import { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';
import PropTypes from 'prop-types';
import styles from './Input.module.css';
import cx from 'classnames';
import { THEME } from '../constants';

const Input = ({ addTodo, theme }) => {
	const [input, setInput] = useState('');

	const onChange = (e) => {
		setInput(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		addTodo(input);
		setInput('');
	};
	return (
		<div
			className={cx(styles.Input, {
				[styles.darkMode]: theme === THEME.DARK,
				[styles.lightMode]: theme === THEME.LIGHT,
			})}>
			<div className={cx(styles.disabledCheckbox)}></div>
			<form onSubmit={onSubmit}>
				<input
					type='text'
					placeholder='Create a new todo...'
					name='todoInput'
					value={input}
					onChange={onChange}
					className={cx({
						[styles.darkMode]: theme === THEME.DARK,
						[styles.lightMode]: theme === THEME.LIGHT,
					})}
				/>
				<input type='submit' hidden />
			</form>
		</div>
	);
};

Input.propTypes = {
	addTodo: PropTypes.func.isRequired,
	theme: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
	theme: state.theme,
});

export default connect(mapStateToProps, { addTodo })(Input);
