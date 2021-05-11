import React from 'react';
import '../components/Header.css';
// import moon from '../images/icon-moon.svg';
import sun from '../images/icon-sun.svg';

const Header = () => {
	return (
		<div className='Header'>
			<h1>TODO</h1>
			<img src={sun} alt='Theme-Icon' />
		</div>
	);
};

export default Header;
