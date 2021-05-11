import React from 'react';
import './Menu.css';

const Menu = () => {
	return (
		<div className='Menu'>
			{/* desktop menu */}
			<div className='desktop-dash'>
				<div>
					<p>5 items left</p>
				</div>
				<div className='todo-filters'>
					<p className='.filter-all'>All</p>
					<p className='.filter-active'>Active</p>
					<p className='.filter-completed'>Completed</p>
				</div>
				<div>
					<p>Clear Completed</p>
				</div>
			</div>

			{/* mobile menu */}
			<div className='mobile-dash'>
				<div className='upper'>
					<div>
						<p>5 items left</p>
					</div>
					<div>
						<p>Clear Completed</p>
					</div>
				</div>
				<div className='mobile-menu'>
					<div className='todo-filters'>
						<p className='.filter-all'>All</p>
						<p className='.filter-active'>Active</p>
						<p className='.filter-completed'>Completed</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Menu;
