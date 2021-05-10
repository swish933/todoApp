import React from 'react';
import './Input.css';

const Input = () => {
	return (
		<div className='Input'>
			<div className='disabled-checkbox'>
				{/* <input type='checkbox' id='checkboxInput' />
				<label for='checkboxInput'></label> */}
			</div>
			<input type='text' placeholder='Create a new todo...' />
		</div>
	);
};

export default Input;
