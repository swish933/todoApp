import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions/actions';
import PropTypes from 'prop-types';
import deleteIcon from '../images/icon-cross.svg';

const Todo = ({ content, id, completed, toggleTodo, deleteTodo }) => {
	return (
		<div className='Todo'>
			<div className='checkbox'>
				<input
					type='checkbox'
					id={id}
					checked={completed}
					onClick={() => {
						toggleTodo(id);
					}}
				/>
				<label for={id}></label>
			</div>
			<p>{content}</p>
			<img
				className='delete'
				src={deleteIcon}
				alt='delete icon'
				onClick={() => {
					deleteTodo(id);
				}}
			/>
		</div>
	);
};

Todo.propTypes = {
	toggleTodo: PropTypes.func.isRequired,
};

const mapDispatchToProps = { toggleTodo, deleteTodo };

export default connect(null, mapDispatchToProps)(Todo);
