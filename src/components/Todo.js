import React from 'react';
import './Todo.css';

const Todo = () => {
	return (
		<div className='Todo'>
			<div className='checkbox'>
				<input type='checkbox' id='checkboxInput' />
				<label for='checkboxInput'></label>
			</div>
			<p> I have a bike</p>
		</div>
	);
};

export default Todo;