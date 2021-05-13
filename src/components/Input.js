import { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

const Input = ({ addTodo }) => {
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
		<div className={styles.Input}>
			<div className={styles.disabledCheckbox}></div>
			<form onSubmit={onSubmit}>
				<input
					type='text'
					placeholder='Create a new todo...'
					name='todoInput'
					value={input}
					onChange={onChange}
				/>
				<input type='submit' hidden />
			</form>
		</div>
	);
};

Input.propTypes = {
	addTodo: PropTypes.func.isRequired,
};

export default connect(null, { addTodo })(Input);
