import React from 'react';

const Menu = () => {
	return (
		<div className='Menu'>
			<div>
				<p>5 items left</p>
			</div>
			<div>
				<button>All</button>
				<button>Active</button>
				<button>Completed</button>
			</div>
			<div>
				<button>Clear Completed</button>
			</div>
		</div>
	);
};

export default Menu;
