import './Input.css';

const Input = () => {
	return (
		<div className='Input'>
			<div className='disabled-checkbox'></div>
			<input type='text' placeholder='Create a new todo...' />
		</div>
	);
};

export default Input;
